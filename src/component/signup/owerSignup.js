import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import { res_signup } from '../../store/action'
import firebase from '../../Config/Firebase/Firebase.js.js'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import coveimage from '../img/coveimage.jpg';
import { Country, Gender } from '../signup/country'
import Appbar from '../navbar/appbar'
import { connect } from 'react-redux';
import { MDBFileInput } from "mdbreact";
import Button from '@material-ui/core/Button';

class FormPage extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
        }

    }



    // handleFile=(e,image)=>{
    //   console.log(e,image)
    //     alert("dfsd")
    //    let fileName = e.target.files[0].name
    //    let ref = firebase.storage().ref('/').child(`images/${fileName}`)
    //    console.log(ref)
    //     ref.put(e.target.files[0])
    //        ref.getDownloadURL()
    //        .then((url)=>{
    //            console.log("Url==>",url)
    //            this.setState({coveri:url})

    //        })
    // }

    // func=()=>{
    //     alert("wroing")
    // }

    handleFile(e, type) {
        console.log(e, type)
        alert("working")
        let fileName = e.target.files[0].name
        let ref = firebase.storage().ref('/').child(`images/${fileName}`)
        console.log(ref)
        ref.put(e.target.files[0])
        ref.getDownloadURL()
            .then((url) => {
                console.log("Url==>", url)
                if (type === "certificate") {
                    this.setState({ certificate: url })
                }
                if (type === "cover") {
                    this.setState({ cover: url })

                }
                alert("upload image")

            })
    }



    render() {
        let { fullName, email, gender, age, city, country, password, confirm_pass, certificate } = this.state

        console.log(this.state)

        return (
            <div><Appbar />
                <MDBContainer style={{ width: "100%" }}>
                    <Grid container spacing={3} xl={12} lg={12}>
                        <Grid item xl={12} lg={10} xm={12} sm={12} style={{ margin: "auto", padding: "0px" }}>
                            <Paper style={{ marginTop: "12%", padding: "20px", width: "100%" }} >
                                <MDBRow>
                                    <MDBCol md="12" style={{ textAlign: "center" }} style={{ height: "150px" }}>
                                        <img src={coveimage} width="100%" height="100%" />
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow>

                                    <MDBCol md="6" className="grey-text" >
                                        <MDBInput
                                            label="Resturant unique name"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={(e) => this.setState({ fullName: e.target.value })}

                                        />

                                        <MDBInput
                                            label="city"
                                            icon="city"
                                            group
                                            type="password"
                                            onChange={(e) => this.setState({ city: e.target.value })}
                                            validate
                                        />
                                        <Country onclick={(e) => this.setState({ country: e })} />


                                    </MDBCol>

                                    <MDBCol md="6" >
                                        <form >
                                            <div className="grey-text">

                                                <MDBInput
                                                    label="Your email"
                                                    icon="envelope"
                                                    group
                                                    type="email"
                                                    onChange={(e) => this.setState({ email: e.target.value })}
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />


                                                <MDBInput
                                                    label="Your password"
                                                    icon="lock"
                                                    group
                                                    type="password"
                                                    onChange={(e) => this.setState({ password: e.target.value })}
                                                    validate
                                                />

                                                <MDBInput
                                                    label="Confirm your password"
                                                    icon="lock"
                                                    group
                                                    type="password"
                                                    onChange={(e) => this.setState({ confirm_pass: e.target.value })}
                                                    validate
                                                />
                                            </div>
                                            <div className="text-center py-4 mt-3">



                                            </div>

                                        </form>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="6" style={{ textAlign: "center" }}>
                                        <input
                                            accept="image/*"
                                            type="file"
                                            style={{ width: "100%", border: "1px solid grey", padding: "10px" }}
                                            value={this.state.pagetwodata}
                                            onChange={(e) => this.handleFile(e, "cover")}
                                        />

                                    </MDBCol>


                                    <MDBCol md="6" style={{ textAlign: "center" }}>
                                        <input
                                            accept="image/*"
                                            type="file"
                                            style={{ width: "100%", border: "1px solid grey", padding: "10px" }}
                                            value={this.state.pagetwodata}
                                            onChange={(e) => this.handleFile(e, "certificate")}
                                        />

                                    </MDBCol>
                                </MDBRow>

                                <MDBRow>
                                    {fullName && email && city && country && password && confirm_pass && certificate ?
                                        <MDBBtn color="cyan" type="button" onClick={(data) => this.props.res_signup(this.state, this.props.history)} style={{ width: "100%", margin: "auto", padding: "20px" }}>
                                            SignUp
                                   </MDBBtn> :
                                        <MDBBtn disabled="false" color="grey" type="button" style={{ width: "100%", margin: "auto", padding: "20px" }}>
                                            Enter accurate data
                                    </MDBBtn>
                                    }
                                </MDBRow>
                            </Paper>
                        </Grid>

                    </Grid>

                </MDBContainer>
            </div>
        );
    };
}


const mapStateToProps = data => {
    return {
        user: data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        res_signup: (data, history) => dispatch(res_signup(data, history)),
    }


}


export default connect(mapStateToProps, mapDispatchToProps)(FormPage)
