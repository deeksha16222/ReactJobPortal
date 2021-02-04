import React, { Component } from "react"

class JobBrief extends Component {
  render() {
    const { onClick } = this.props;
    const { _id, name, location, salary, description, logo } = this.props.job;
    const { city, country } = location;

    return (
      <div style={{ cursor: "pointer", textAlign: "center" }} onClick={onClick} key={_id}>
        <h4>{name}</h4>
        <h5>{city}, {country}</h5>
        <img src={logo} className="img img-thumbnail" alt="job-logo" />
        <p style={{ padding: 10 }}>{description}</p>
        <div>Salary: {salary / 1000}K</div>
        <hr />
      </div>
    );
  };
}

export default JobBrief;
