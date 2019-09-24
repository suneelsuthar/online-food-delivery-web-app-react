import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Grid from '@material-ui/core/Grid';
import { textAlign } from '@material-ui/system';
import { Link } from "react-router-dom";
import firebase from '../../Config/Firebase/Firebase.js'
import Appbar from '..//navbar/appbar'
import {login} from './../../store/action'
import { connect } from 'react-redux';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

 class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      login: true
    }
  }

  render() {
    console.log(this.props.history)
    let { email, password } = this.state;
    return (
      <div>
        <Appbar />
        <MDBContainer style={{ width: "auto", width: "100%" }}>
          <Grid container spacing={3} xl={12} lg={12} >
            <Grid item xl={10} lg={10} xm={12} sm={12} style={{ margin: "auto" }}>
              <Paper style={{ marginTop: "12%" }} >
                <MDBRow>
                  <MDBCol md="6" style={{ textAlign: "center" }}>
                    <img src="https://img.icons8.com/bubbles/100/000000/food.png" width="150px" style={{ marginTop: "100px" }} />
                  </MDBCol>
                  {this.state.login ?
                    <MDBCol md="6">
                      <MDBCardBody>
                        <form>
                          <p className="h4 text-center py-4">Sign in</p>
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
                          </div>
                          <div className="text-center py-4 mt-3">
                            {email && password ?
                              <MDBBtn color="cyan" type="button" onClick={(data,history)=>this.props.login(this.state,this.props.history)} style={{ width: "100%" }}>
                                login
                         </MDBBtn> :

                              <MDBBtn disabled="false"  color="cyan" type="button" style={{ width: "100%" }}>
                                Login
                            </MDBBtn>}
                            <Link>
                              <a onClick={() => this.setState({ login: false })}>Create your Account ⇨ </a>
                            </Link>
                            <br />
                          </div>
                        </form>
                      </MDBCardBody>
                    </MDBCol> :

                    <MDBCol md="6">
                      <MDBCardBody>
                        <form>
                          <p className="h4 text-center py-4">Are you want to user or owner?</p>
                          <div className="grey-text">
                          </div>
                          <div className="text-center py-4 mt-3">
                            <Link to="res-signup">
                              <MDBBtn color="cyan" type="button" style={{ width: "100%" }}>
                                RESTURANT
                          </MDBBtn>
                            </Link>


                            <Link to="usersignup">
                              <MDBBtn color="cyan" type="button" style={{ width: "100%" }}>
                                USER
                             </MDBBtn>
                            </Link>
                          </div>
                        </form>
                      </MDBCardBody>
                    </MDBCol>
                  }
                </MDBRow>
              </Paper>
            </Grid>

          </Grid>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      name: state.name,
  }
}
const mapDispatchToProps = dispatch => {
  return {
      login: (data,history) => dispatch(login(data,history)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)

