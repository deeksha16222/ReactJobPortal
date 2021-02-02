import React, {Component} from 'react';
import { Row, Col, Form, Input, FormGroup, Label } from 'reactstrap';

 class PersonalInformation extends React.Component{
     constructor(props){
         super(props);

         this.state = {
             firstname: "",
             lastname: "",
             mobileno : "",
             email : "",
             city : "",
             postalcode : "",
             description: ""
         };
         this.onChange = this.onChange.bind(this);
         this.Save = this.Save.bind(this);
         
        onChange = e => this.setDtate({[e.target.name]: e.target.value});

         let data = {
             firstname : this.state.firstname,
             lastname : this.state.lastname,
             mobileno : this.state.mobileno,
             email : this.state.email,
             city : this.state.city,
             postalcode : this.state.postalcode,
             description : this.state.description
         };

         render(){
             return(
                 {""}
                 <form>
                 <div class="form-row">
                 <div class="form-group col-md-6">
                 <label className="label-style" for="firstname">
                 First Name
                 </label>
                 <input 
                 type ="text"
                 class ="form-control"
                 id ="firstname"
                 name ="firstname"
                 placeholder = "First Name"
                 onChange ={this.onChange} />
                 </div>

                 <div class="form-group col-md-6">
                 <label className="label-style" for="lastname">
                 Last Name
                 </label>
                 <input 
                 type ="text"
                 class ="form-control"
                 id ="lasttname"
                 name ="lastname"
                 placeholder = "Last Name"
                 onChange ={this.onChange} />
                 </div>
                 </div>

                 <div class="form-row">
                 <div class="form-group col-md-6">
                 <label className="label-style" for="phoneno">
                 Phone No
                 </label>
                 <input 
                 type ="text"
                 class ="form-control"
                 id ="phoneno"
                 name ="phoneno"
                 placeholder = "Phone no"
                 onChange ={this.onChange} />
                 </div>

                <div class="form-group col-md-6">
                 <label className="label-style" for="email">
                 Email
                 </label>
                 <input 
                 type ="text"
                 class ="form-control"
                 id ="email"
                 name ="email"
                 placeholder = "Email"
                 onChange ={this.onChange} />
                 </div>
                 </div>

                 <div class="form-group">
                 <div class="form-group col-md-6">
                 <label className="label-style" for="city">
                 City
                 </label>
                 <input 
                 type ="text"
                 class ="form-control"
                 id ="city"
                 name ="city"
                 placeholder = "City"
                 onChange ={this.onChange} />
                 </div>

                 <div class="form-group col-md-6">
                 <label className="label-style" for="postalcode">
                 Postal Code
                 </label>
                 <input 
                 type ="text"
                 class ="form-control"
                 id ="postalcode"
                 name ="postalcode"
                 placeholder = "Postal Code"
                 onChange ={this.onChange} />
                 </div>
                 </div>
                 <div class="form-group col-md-6">
                 <label className="label-style" for="description">
                 Description
                 </label>
                 <input 
                 type ="text"
                 class ="form-control"
                 id ="description"
                 name ="description"
                 placeholder = "Describe your position and accomplishments as Full Stack Developer"
                 onChange ={this.onChange} />
                 </div>

                 <button onClick={this.Save} class=" btn btn-primary savebutton">
                 Save
                 </button>
                 </form>
             );
         }
     }
 }

 export default PersonalInformation();