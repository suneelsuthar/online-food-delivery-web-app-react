import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const Button = (props) => {
  return (
    //   <MDBBtn size="small" style={{padding:"0px"}} rounded></MDBBtn>
      <MDBBtn style={{borderRadius:"50px",margin:"0px"}}  outline color="secondary">{props.name}</MDBBtn>
  );
}

export {Button};