import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home,UserSignup,RestSignup,Login,Register,Userpage,Res_page,Card,ResProfile,Addproduct,Deleteproduct,Addcategory,Messages,EmailVerify,Dashboard,Dashboardprofile} from '../../Containers'

function BasicExample() {
  return (
    <Router>
        <Route exact path="/" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/usersignup" component={UserSignup} />
        <Route path="/res-signup" component={RestSignup} />
        <Route path="/userhome" component={Userpage} />
        <Route path="/reshome" component={Res_page} />
        <Route path="/card" component={Card} />
        <Route path="/resturant" component={ResProfile} />
        <Route path="/addproduct" component={Addproduct} />
        <Route path="/delete" component={Deleteproduct} />
        <Route path="/addcategory" component={Addcategory} />
        <Route path="/messages" component={Messages} />
        <Route path="/verify" component={EmailVerify} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Dashboardprofile} />

        
        
    </Router>
  );
}
export default BasicExample