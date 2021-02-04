import { useState } from "react";

function PersonalInformation () {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactno: "",
    city: "",
    postalCode: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

    return (
      <div>
        <div className="row">
          <strong>Personal Information</strong>
        </div>

        <br/>

        <div className="row">
          <div className="col-lg-4">
            <label>First name</label>&nbsp;                      
            <input value={values.firstName} name="firstName" onChange={handleInputChange} type="text" className="form-control"/>
          </div>
          &nbsp;&nbsp;&nbsp;
            <div className="col-lg-4">
              <label>Last name</label>&nbsp;               
              <input value={values.lastName} name="lastName" onChange={handleInputChange} type="text" className="form-control" />
            </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <label>Email</label>&nbsp;                      
            <input value={values.email} name="email" onChange={handleInputChange} type="text" className="form-control" />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="col-lg-4">
            <label>Mobile No.</label>&nbsp;               
            <input value={values.contactno} name="contactno" onChange={handleInputChange} type="text" className="form-control" />
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4">
            <label>City</label>&nbsp;                      
            <input value={values.city} name="city" onChange={handleInputChange} type="text" className="form-control" />
          </div>
          &nbsp;&nbsp;&nbsp;
            <div className="col-lg-4">
              <label>Postal code</label>&nbsp;               
              <input value={values.postalCode} name="postalCode" onChange={handleInputChange} type="text" className="form-control" />
            </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <label>
              Describe your position and accomplishments as Full Stack Developer.
            </label>
          </div>
          <div className="col-lg-6">
            <textarea value={values.description} name="description" onChange={handleInputChange} style={{width : '100%'}} className="form-control" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-2">
            <button className="btn btn-primary">Save</button> 
          </div>
        </div>
      </div>
    )
  }

  export default PersonalInformation;
