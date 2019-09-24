import firebase from "../Config/Firebase/Firebase.js"

const res_signup = (data, history) => {
    return (dispatch) => {
        console.log(data.password === data.confirm_pass)
        if (data.password === data.confirm_pass) {

            firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
                data.check = res.user.emailVerified
                data.account = 'resturant'
                firebase.firestore().collection('Users').doc(res.user.uid).set(data).then(

                    firebase.auth().currentUser.sendEmailVerification().then(function () {
                        dispatch({ type: 'adduser' })
                        // Email sent.
                        history.push('/')
                        dispatch({ type: 'addresturant' })
                    })
                )
            }).catch((err) => {
                dispatch({
                    type: 'emailerror',
                    payload: err.code
                })

                setTimeout(() => {
                    dispatch({
                        type: 'hideEmail-err',
                    })
                }, 3000);
            })
        }
        else {
            dispatch({ type: 'showPass-err' })

            setTimeout(() => {
                dispatch({ type: 'hidePass-err' })
            }, 3000);
        }
    }
}


const usersignup = (data, history) => {
    return (dispatch) => {
        if (data.password === data.confirm_pass) {
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
                data.check = res.user.emailVerified
                data.account = 'user'
                firebase.firestore().collection('Users').doc(res.user.uid).set(data).then(
                    firebase.auth().currentUser.sendEmailVerification().then(function () {
                        console.log(`Email Sent ==>`)
                        history.push("/")
                        dispatch({ type: 'adduser' })

                    })
                )
            }).catch((err) => {
                dispatch({
                    type: 'emailerror',
                    payload: err.code
                })
            })
        }
        else {
            dispatch({ type: 'uncorrect_password' })

           
        }
    }
}

function login(data, history) {
    console.log(history)

    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(resolve => {
            console.log(resolve.user.uid)
            if (resolve.user.emailVerified === true) {

                firebase.firestore().collection('Users').doc(resolve.user.uid).get().then(res => {
                    let checkData = res.data()
                    console.log(checkData)
                    localStorage.setItem('currentuser', JSON.stringify({ user: checkData.fullName, email: checkData.email }))
                    if (checkData.account == 'resturant') {
                        dispatch({
                            type: 'login',
                            payload: checkData
                        })
                        history.push('/dashboard')

                    } else {

                        history.push('/userhome')
                        dispatch({
                            type: 'login',
                            payload: checkData
                        })

                    }
                })

            }
            else {
                history.push('/verify')
            }
        })
    }
}


const getData = () => {
    return async dispatch => {
        firebase.firestore().collection('Users').where("account", "==", "resturant").get().then(
            value => {

                value.forEach(doc => {
                    let products = doc.data()
                    console.log(products)
                    dispatch({ type: 'getData', payload: products })


                })
            })
    }
}



const getProduct = () => {
    let localdata = localStorage.getItem("profile");
    localdata = JSON.parse(localdata)
    console.log(localdata)
    return async dispatch => {
        firebase.firestore().collection('products').where("user", "==", localdata).get().then(
            value => {

                value.forEach(doc => {
                    let products = doc.data()
                    console.log(products)
                    dispatch({ type: 'getproduct', payload: products })


                })
            })
    }
}


function logout(props){
    firebase.auth().signOut().then(function() {
       alert('logut successful')
       localStorage.removeItem('user')
       props.push('/')
      }).catch(function(error) {
        console.log(error)
      })
}

export {
    usersignup, res_signup, login, getData,getProduct,logout
}