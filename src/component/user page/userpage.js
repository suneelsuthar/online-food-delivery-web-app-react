import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './userpage.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { MDBBtn } from 'mdbreact';
import Chips from './chip'
import Card from '../card/card'
import Navbar from './../navbar/appbar'
import {getData} from "./../../store/action";
import { connect } from 'react-redux';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            <Box p={2}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}



 class NavTabs extends React.Component{
    constructor(){
        super()
        this.state={
           value:"" 
        }
    }


    componentWillMount() {
        this.props.getData()
        
    }

    handleChange(event, newValue) {
        this.setState({value:newValue})
    }



render(){
    let array =this.props.data.restaccount;
    return (
        <div>
            <Navbar position="fixed"style={{backgroundColor:"rgb(7, 177, 196)", padding:"5px"}}/>
            <AppBar position="static" className="tabs">
                <Tabs
                    variant="fullWidth"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="RESTURANTS" href="/drafts" {...a11yProps(0)} />
                    <LinkTab label="MY REQUESTS" href="/trash" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={this.state.value} index={0} className="respage">

                <Paper style={{ width: "85%", margin: "auto", paddingBottom: "10px" }}>
                    <Grid container spacing={2} xl={12} lg={12} md={12} xs={12} sm={12}>
                        <Grid item xl={8} lg={8} md={8} xs={12} sm={12}>

                            <TextField
                                id="outlined-password-input"
                                label="Search your favourite resturant ..."
                                // className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                color="secondary"
                                style={{ width: "100%" }}
                            />

                        </Grid>
                        <Grid item xl={4} lg={4} md={6} xs={12} sm={12} style={{textAlign:"center"}}>
                            <MDBBtn className="btn" type="button" >
                                FIND RESTURANTS
                             </MDBBtn>
                        </Grid>
                    </Grid>
                </Paper>

                {/* <Paper className={classes.paper} style={{ width: "100%",textAlign:"center"}}> */}
                    <div style={{marginTop:"10px"}}>
                    <Grid container spacing={3} xl={12} lg={12} md={8} xs={10} style={{margin:"auto"}}>
                        <Chips name="pizza" />
                        <Chips name="burger"/>
                        <Chips name="chinese"/>
                        <Chips name="lado" />
                        <Chips name="donut"/>
                        <Chips name="bubbles" />
                        <Chips name="fast foof"/>
                        <Chips name="fast food" />
                        <Chips name="sea food" />
                        <Chips name="dees"/>
                    </Grid>
                    </div>
                {/* </Paper> */}

        
        {array.map((val,ind)=>
        // console.log(val)
     <Card  certificate={val.certificate} cover={val.cover} city={val.city} country={val.country} email={val.email} name={val.fullName} gender={val.gender} />

        )}

        {/* <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYEMyZP3hv-6PsHlfknb8ujQiKtQjNiyLZR-1P9aKlglD6n0chw" />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92yUaAMq9ElydaqirAHvwg4-5L-PwhA9DoFjXJMZaeYdt3YPc" />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI8LDc6OAk9zjxJOKu8Ry-_ieiB-wsxPu2vFs1I-WFlAWvTsl" />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDcUc0jcAVCiT4fEC2tX6WSseQl_q5ZTHuxZBJsblN6xDe3PT-Q" />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpJ3T590FAEp9BUe-ILaWp-0T7Cb79ksBKRwwbbdO4B8-blkf0Q" />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDVIIgpbLkIC-sk8gcbth7KdIu6nV0J54e6-1qh4bnrpRt7rl1w" />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pOWnVbBbG4eeLdnfTC0ELiHgSxccei2fN5rpIsxo46NsXbLqCQ" />
     */}

     
            

    
        


            </TabPanel>



            <TabPanel value={this.state.value} index={1} className="requestpage">
                <Paper style={{ width: "100%", margin: "auto", paddingBottom: "10px" }}>
                    <Grid container spacing={1} xs={12}>
                        <Grid item xs={12}>
                            <p className="orderStatus">ORDER STATUS</p>
                        </Grid>
                    </Grid>
                </Paper>

            </TabPanel>
            {/* <TabPanel value={value} index={2}>
        Page Three
    //   </TabPanel> */}
    
        </div>
    );
}}

const mapStateToProps = data => {
    return {
        data: data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData()),

    }


}


export default connect(mapStateToProps, mapDispatchToProps)(NavTabs)