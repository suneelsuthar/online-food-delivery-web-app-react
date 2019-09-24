import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import firebase from '../../Config/Firebase/Firebase.js.js'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './signup.css';
import { Country, Gender } from './country';
import Appbar from './../navbar/appbar'
import { usersignup} from './../../store/action'
import { connect } from 'react-redux';

class FormPage extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            percentage:0
        }

    }

    



    render() {

        let { fullName, email, gender, age, city, country, password, confirm_pass, } = this.state
console.log(this.props.history)
        return (
            <div><Appbar />
                <MDBContainer style={{ width: "100%" }}>
                    <Grid container spacing={3} xl={12} lg={12}>
                        <Grid item xl={12} lg={10} xm={12} sm={12} style={{ margin: "auto", padding: "0px" }}>
                            <Paper style={{ marginTop: "12%", padding: "20px", width: "100%" }} >

                                <MDBRow>
                                    <MDBCol md="4">
                                        <img src="https://img.icons8.com/bubbles/100/000000/food.png" width="100px" className="resIcon" />
                                    </MDBCol>
                                    <MDBCol md="8">
                                        <p className="title">
                                            <span className="heading"> DELICIOUS FOOD RESTRURANT</span>
                                        </p>
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
                                            label="Your email"
                                            icon="envelope"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={(e) => this.setState({ email: e.target.value })}

                                        />

                                        <Gender gender={(e) => this.setState({ gender: e })} />

                                        <MDBInput
                                            label="Age"
                                            icon="calendar-alt"
                                            group
                                            type="text"
                                            validate
                                            onChange={(e) => this.setState({ age: e.target.value })}

                                        />

                                    </MDBCol>

                                    <MDBCol md="6" >
                                        <form >

                                            {/* <p className="h4 text-center py-4">Resturant Sign up</p> */}
                                            <div className="grey-text">

                                                <MDBInput
                                                    label="city"
                                                    icon="city"
                                                    group
                                                    type="text"
                                                    onChange={(e) => this.setState({ city: e.target.value })}
                                                    validate

                                                />

                                                <Country onclick={(e) => this.setState({ country: e })} />

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

                                    {fullName && email && gender && age && city && country && password && confirm_pass ?
                                        <Link >
                                        <MDBBtn  color="cyan" type="button" onClick={(data)=>this.props.usersignup(this.state,this.props.history)} style={{ width: "100%", margin: "auto", padding: "20px" }}>
                                        
                                            SignUp
                                        </MDBBtn></Link>
                                         :
                                        <MDBBtn disabled="false" color="grey" type="button" onClick={()=>alert("dfds")} style={{ width: "100%", margin: "auto", padding: "20px" }}>
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
        user:data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        usersignup: (data,history) => dispatch(usersignup(data,history)),
    }


}


export default connect(mapStateToProps, mapDispatchToProps)(FormPage)






























