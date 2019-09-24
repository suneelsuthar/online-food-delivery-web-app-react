import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import firebase from '../../Config/Firebase/Firebase.js'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './dashbord.css'
 class OutlinedTextFields extends React.Component{
  constructor(){
    super()
    this.state={
      payment:"free"
    }
  }

  addProduct(user){
    this.setState({user:user})
    alert("success")
    firebase.firestore().collection("products").add(this.state)
}


async handleFile(e){
  console.log(e)
  let user = localStorage.getItem("currentuser");
    user = JSON.parse(user)
   let fileName = e.target.files[0].name
   let ref = firebase.storage().ref('/').child(`images/${fileName}`)
   console.log(ref)
   await ref.put(e.target.files[0])
       ref.getDownloadURL()
       .then((url)=>{
           console.log("Url==>",url)
           this.setState({productimage:url,user:user.email})
          
       })
}



  
render(){
  
  let {itemName,title,price,discription,productimage,category} =this.state

  
  return (
    <div>
<main style={{textAlign:"center"}} >
<Paper style={{ width: "70%", margin: "auto", padding: "20px", marginTop: "10%" }}>
<MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        select category
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        
        <MDBDropdownItem name="burger" onClick={(e)=>this.setState({category:e.target.name})}>burger</MDBDropdownItem>
        <MDBDropdownItem name="fast food" onClick={(e)=>this.setState({category:e.target.name})}>fast food</MDBDropdownItem>
        <MDBDropdownItem name="peeza" onClick={(e)=>this.setState({category:e.target.name})}>peeza</MDBDropdownItem>
        <MDBDropdownItem name="dees" onClick={(e)=>this.setState({category:e.target.name})}>dees</MDBDropdownItem>
        <MDBDropdownItem name="sea food" onClick={(e)=>this.setState({category:e.target.name})}>sea food</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>

      <TextField
        id="outlined-email-input"
        label="product name"
        type="text"
        name="Item name"
        autoComplete="title"
        margin="normal"
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>this.setState({itemName:e.target.value})}
      />

      <TextField
        id="outlined-email-input"
        label="price"
        type="number"
        name="price"
        autoComplete="price"
        margin="normal"
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>this.setState({price:e.target.value})}
      />
    

      <TextField
        id="outlined-email-input"
        label="discription"
        type="text"
        name="discription"
        autoComplete="discription"
        margin="normal"
        variant="outlined"
        style={{width:"100%"}}
        onChange={(e)=>this.setState({discription:e.target.value})}
      />
  {/* <p > */}
  <label class="container"> Deleivery free
  <input type="radio" checked="checked" name="radio"/>
  <span class="checkmark"></span>
</label>
<label class="container">Deleivery Price
<input type="radio" name="radio" onChange={(e)=>this.setState({delivery:e.target.value})} />
  <span class="checkmark"></span>
</label>
{this.state.delivery  ? 
    
  <TextField
  id="outlined-email-input"
  label="discription"
  type="number"
  name="enter price"
  autoComplete="enter price"
  margin="normal"
  variant="outlined"
  style={{width:"100%"}}
  onChange={(e)=>this.setState({payment:e.target.value})}
/>
     
    // onChange={(e)=>{this.handleFile(e)}}
    :""
    

}



     
<div>
   
   <input
     accept="image/*"
     id="contained-button-file"
     type="file"
     style={{width:"100%",display:"none"}}
     value={this.state.pagetwodata}
    onChange={(e)=>{this.handleFile(e)}}
    />
   <label htmlFor="contained-button-file" style={{width:"100%"}} >
     <Button variant="contained" component="span" style={{width:"100%"}} >
       Upload image
     </Button>
   </label>



   <p style={{padding:"20px 0px 20px 0px"}}>   


   {itemName && price && discription && productimage && category  ? 
 <Button variant="contained" style={{float:"right",width:"100%"}}  color="primary"  onClick={this.addProduct.bind(this)}>
        Add product
     </Button>           :
     <Button variant="contained" color="primary" style={{width:"100%"}}   onClick={this.addProduct.bind(this)} disabled="false">
        Add product
     </Button>                
}



     
    </p>

 </div>
     
      </Paper>
      </main>
    </div>
  )};
}

export default OutlinedTextFields