import React, { Component } from "react";

class JobDetails extends Component {
  render() {
    const { job } = this.props;
    if (!job) return null;

    const { name, location, salary, description, logo } = job;
    const { city, country } = location;

    return (
      <span
        className="text-center border rounded"
        style={{
          display: "inline-block",
          maxWidth: "750px",
          verticalAlign: "top",
          margin: "10px",
        }}
      >
        <h3 className="mt-3">{name}</h3>
        <h5>{city}, {country}</h5>
        <img src={logo} style={{ width: "90%", marginTop: "20px" }} alt="job-logo" />
        <p className="p-5">{description}</p>
        <h5>Salary: {salary / 1000}K</h5>
      </span>
    );
  }
}

export default JobDetails;
