import { useState } from "react";

const months = ["Jan", 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const years = ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013"];

function WorkExperience() {
  const [showAddWork, setAddWork] = useState(false);
  const [experiences, setExperiences] = useState([]);

  const onJobSubmit = (job) => {
    setExperiences([...experiences, job]);
  }

  const onExperienceRemove = (jobTitle)  => {
    const filteredArr = experiences.filter(exp => exp.jobTitle !== jobTitle);
    setExperiences(filteredArr)
  } 

  const buttonText = showAddWork ? 'Close' : 'Add';

  return (
    <div style={{display: 'block'}}>
      <div className="row">
        <div className="col-lg-6">
          <strong>Work Experience</strong>
        </div>
        <div className="col-lg-6">
          <button className="btn btn-primary" onClick={() => setAddWork(!showAddWork)}>{buttonText}</button>
        </div>
        <div className="col-lg-12">
          <AddJob show={showAddWork} onJobSubmit={onJobSubmit} />
        </div>
      </div>
      {
        experiences && experiences.length > 0 &&
        experiences.map((experience, idx) => {
          console.log(experience.timePeriod)
          const { jobTitle, company, location, timePeriod: { from, to } } = experience;
          const { month: fromMonth, year: fromYear } = from;
          const { month: toMonth, year: toYear } = to;
          return (
            <div className="row mt-4" key={idx}>
              <div className="col-lg-6">
                <div className="col-lg-6">
                  <strong> {jobTitle} </strong>
                </div>
                <div className="col-lg-6">
                  {company}
                </div>
                <div className="col-lg-6">
                  {location}
                </div>
                <div className="col-lg-6" style={{ paddingBottom: '20px' }}>
                  {`${fromMonth} ${fromYear} to ${toMonth} ${toYear}`}
                </div>
                <br />
              </div>
              <div className="col-lg-6">
                  <button className="btn btn-danger" onClick={() => onExperienceRemove(jobTitle)}>Remove</button>
                </div>
            </div>
          )
        })
      }
    </div>
  )

  function AddJob(props) {
    const { onJobSubmit, show } = props;

    const [values, setValues] = useState({
      jobTitle: "",
      company: "",
      location: "",
      timePeriod: { from: { month: months[0], year: years[0] }, to: { month: months[0], year: years[0] } },
    });

    if (!show) return null;

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };

    const onClickSave = () => onJobSubmit(values);

    const onTimePeriodChange = (e, fromTo, yearMonth) => {
      let tempValues = JSON.parse(JSON.stringify(values));
      if (fromTo === 'from') {
        if (yearMonth === 'year') {
          tempValues.timePeriod.from.year = e.target.value;
        } else if (yearMonth === 'month') {
          tempValues.timePeriod.from.month = e.target.value;
        }
      } else if (fromTo === 'to') {
        if (yearMonth === 'year') {
          tempValues.timePeriod.to.year = e.target.value;
        } else if (yearMonth === 'month') {
          tempValues.timePeriod.to.month = e.target.value;
        }
      }
      console.log('values', values.timePeriod);
      setValues(tempValues);
    };

    console.log('values', values)

    return (
      <div className="row">
        <div className="col-lg-12">
          <label>Job title</label>
          <input value={values.jobTitle} name="jobTitle" onChange={handleInputChange} type="text" className="form-control" />
        </div>
        <div className="col-lg-12">
          <label>Company</label>
          <input value={values.company} name="company" onChange={handleInputChange} type="text" className="form-control" />
        </div>
        <div className="col-lg-12">
          <label>Location</label>
          <input value={values.location} name="location" onChange={handleInputChange} type="text" className="form-control" />
        </div>
        <div className="col-lg-12">
          <label>Time Period</label>
        </div>
        <div className="col-lg-12">
          <label className="col-lg-6">From</label>
          <label className="col-lg-6">To</label>
        </div>
        <div className="col-lg-3">
          <select className="form-control" onChange={(e) => onTimePeriodChange(e, 'from', 'month')}>
            {
              months.map((m, i) => <option key={i} value={m}> {m} </option>)
            }
          </select>
        </div>
        <div className="col-lg-3">
          <select onChange={(e) => onTimePeriodChange(e, 'from', 'year')} className="form-control">
            {
              years.map((y, i) => <option key={i} value={y}> {y} </option>)
            }
          </select>
        </div>
        <div className="col-lg-3">
          <select onChange={(e) => onTimePeriodChange(e, 'to', 'month')} className="form-control">
            {
              months.map((m, i) => <option key={i} value={m}> {m} </option>)
            }
          </select>
        </div>
        <div className="col-lg-3">
          <select onChange={(e) => onTimePeriodChange(e, 'to', 'year')} className="form-control">
            {
              years.map((y, i) => <option key={i} value={y}> {y} </option>)
            }
          </select>
        </div>
        <br /><br /><br />
        <button className="btn btn-primary" onClick={onClickSave}>Save</button>
      </div>
    );
  }
}

export default WorkExperience;
