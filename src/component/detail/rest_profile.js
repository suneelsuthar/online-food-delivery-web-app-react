import React from 'react';
import Navbar from '../navbar/appbar'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import './rest_profile.css'
import { Button } from './../button/button'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Reviews from './review'
import Typography from '@material-ui/core/Typography';
import {getProduct} from './../../store/action'
import {connect} from 'react-redux'
 class JumbotronPage extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount(){
    this.props.getProduct()
    }

    render() {

        let profiledata = this.props.location.state.profile;
        console.log(profiledata)

        return (
            <div>
                <Navbar />
                <MDBContainer className="mt-5 text-center">
                    <MDBRow>
                        <MDBCol >
                            <MDBJumbotron className="p-0">
                                <MDBCardImage
                                    className="img-fluid"
                                    src={profiledata.certificate}/>
                                
                                {/* <MDBCardBody> */}
                                <Grid container style={{ margin: "0px", padding: "0px" }}>

                                    <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
                                        <Button name="category1" color="info" />
                                    </Grid>
                                    <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
                                        <Button name="category2" color="info" />
                                    </Grid>
                                    <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
                                        <Button name="category3" color="info" />
                                    </Grid>



                                    <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
                                        <Button name="category4" color="info" />
                                    </Grid>
                                    <Grid item xl={2} lg={2} md={4} sm={4} xs={6}>
                                        <Button name="category5" color="info" />
                                    </Grid>
                                    <Grid item xl={2} lg={2} md={4} sm={4} xs={6}>
                                        <Button name="category6" color="info" />
                                    </Grid>
                                </Grid>

                                {/* </MDBCardBody> */}
                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>


                <MDBContainer className="mt-5 text-center" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
{this.props.product.map((val,i)=>
                    
                    <Paper style={{ padding: "10px",marginBottom:"30px" }}>
                        <Grid container style={{ margin: "0px", padding: "0px" }}>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} style={{ padding: "0px", borderRight: "2px solid grey" }}>
                                <img src={val.productimage} height="auto" width="100%" height="200px"/>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <h4 style={{ textAlign: "left", paddingLeft: "30px" }}>{val.itemName}</h4>
                                <h4 style={{ textAlign: "left", paddingLeft: "30px" }}>DELIVERY {val.payment}</h4>
                                <h4 style={{ textAlign: "left", paddingLeft: "30px" }}>PKR: {val.price}</h4>
                                <h4 style={{ textAlign: "left", paddingLeft: "30px" }}><Reviews /></h4>
                                <h5 style={{ textAlign: "left", paddingLeft: "30px" }}><u>DISCRIPTION</u></h5>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: "justify", padding: "10px" }}>
                                {val.discription}
                                 </Typography>
                                <p>
                                    <span name="category2" className="order" onClick={()=>alert("under developing")}>
                                        <img src="https://img.icons8.com/ios-glyphs/30/000000/create-order.png" /> ORDER NOW
                            </span>
                                </p>
                            </Grid>
                        </Grid>
                    </Paper>


                    
)}
</MDBContainer>

            </div>

        )
    }
}




const mapStateToProps = state => {
    return {
        product: state.prodcuts,
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        getProduct: () => dispatch(getProduct()),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(JumbotronPage)
  
  