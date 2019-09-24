import firebase  from "./../Firebase/Firebase.js";



// function signup(email,password){
//   return new Promise ((resolve,reject)=>{
//       firebase.auth().createUserWithEmailAndPassword(email,password).then(res=>resolve({email:res.user.email,uid:res.user.uid}
//       )).catch((rej)=>reject(rej))
//   })
// }

function login(email,password){
  return new Promise ((resolve,reject)=>{
      firebase.auth().signInWithEmailAndPassword(email,password).then(res=>resolve(res.user)).catch((rej)=>reject(rej))
      console.log(email,password)
  })

}

// function logout (){
//   return new Promise ((resolve,reject)=>{
//       firebase.auth().signOut().then((res)=>resolve(res)).catch((err)=>reject(err))
//   })

// }

// let LoginAdmin = (email,password,props) => {
//   return new Promise((resolve, reject) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(res => {
//       let obj={
//         email:res.user.email,
//         id:res.user.uid,
//       }
     
//       resolve(obj)
//     })
//     .catch(error => {
//         reject(error.code)
//         console.log('i am error')

//     });
    
//   });
// };

// email verification

const signup = (data) => {
    return dispatch => {
console.log(data)
        if (data.passValue === data.confirmPassValue) {

                firebase.auth().createUserWithEmailAndPassword(data.emailValue,data.passValue).then((res)=>{
                    firebase.firestore().collection('Resturants').doc(res.user.uid).set(data).then(
                        
                        firebase.auth().currentUser.sendEmailVerification().then(function () {
                            console.log(`Email Sent ==>`)
                //             // Email sent.
                //             // if (user.emailVerified === false) {
                //             //     // window.location.href = '../index.html'
                //             //     dispatch({ type: 'addResturant' })
                //             // }
        
                //         })
                    }))
                
                })
        }
        }
    }



export{
    // LoginAdmin,
    // signup,
    // login,
    // logout
}
















// imageFunc = async (e) => {
//     console.log(e.target.files[0])
//     let imagename = e.target.files[0].name
//     let ref = Firebase.storage().ref('/').child("image/" + imagename)
//     await ref.put(e.target.files[0])
//     ref.getDownloadURL().then(url =>
//       this.setState({
//         image: url,
//         imagename : imagename,
//         login: false
//       })
//     )
//   }
