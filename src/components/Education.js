import {useState} from 'react';

const months = ["Jan", 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const years = ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013"];

function Education () {
  const [showAddEdu, setAddEdu] = useState(false);
  const [educations, setEducations] = useState([]);

  const onEducationSubmit = (education) => {
    setEducations([...educations, education])
  }

  const onEducationRemove = (degree)  => {
    const filteredArr = educations.filter(edu => edu.degree !== degree);
    setEducations(filteredArr)
  } 

  const buttonText = showAddEdu ? 'Close' : 'Add';

    return (
      <div style={{paddingLeft : '0px !important', display: 'block'}}>
        <div className="row">
          <div className="col-lg-6">
            <strong>Education</strong>
          </div>
          <div className="col-lg-6">
            <button className="btn btn-primary" onClick={() => setAddEdu(!showAddEdu)}>{buttonText}</button>
          </div>
          <div className="col-lg-12">
            <AddEducation show={showAddEdu} onEducationSubmit={onEducationSubmit} />
          </div>
        </div>
        {
          educations && educations.length > 0 &&
          educations.map((edu, idx) =>{
            const {degree, college, location, timePeriod: {from, to }} = edu;
            const {month: fromMonth, year: fromYear} = from;
            const {month: toMonth, year: toYear} = to;
            return (
              <div className="row mt-4" key={idx}>
                <div className="col-lg-6">
                  <div className="col-lg-6">
                    <strong> {degree} </strong>
                  </div>
                  <div className="col-lg-6">
                    {college}
                  </div>
                  <div className="col-lg-6">
                    {location}
                  </div>
                  <div className="col-lg-6" style={{paddingBottom : '20px'}}>
                  {`${fromMonth} ${fromYear} to ${toMonth} ${toYear}`}
                  </div>
                  <br/>
                </div>
                <div className="col-lg-6">
                  <button className="btn btn-danger" onClick={() => onEducationRemove(degree)}>Remove</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )

    function AddEducation (props) {
      const {onEducationSubmit, show} = props;
      
      const [values, setValues] = useState({
        degree: "",
        college: "",
        location: "",
        timePeriod: {from: {month: months[0], year: years[0]}, to: {month: months[0], year: years[0]}},      
      });

      if (!show) return null;

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
      };

      const onClickSave = () => onEducationSubmit(values);

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

      return (
        <div className="row">
          <div className="col-lg-12">
            <label>Degree</label>
            <input value={values.degree} name="degree" onChange={handleInputChange} type="text" className="form-control"/>
          </div>
          <div className="col-lg-12">
            <label>College</label>
            <input value={values.college} name="college" onChange={handleInputChange} type="text" className="form-control"/>
          </div>
          <div className="col-lg-12">
            <label>Location</label>
            <input value={values.location} name="location" onChange={handleInputChange} type="text" className="form-control"/>
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
                  months.map((m, i)=> <option key={i} value={m}> {m} </option>)
                }
              </select>
            </div>
            <div className="col-lg-3">
              <select onChange={(e) => onTimePeriodChange(e, 'from', 'year')} className="form-control">
                {
                  years.map((y, i)=> <option key={i} value={y}> {y} </option>)
                }
              </select>
            </div>
            <div className="col-lg-3">
              <select onChange={(e) => onTimePeriodChange(e, 'to', 'month')} className="form-control">
                {
                  months.map((m, i)=> <option key={i} value={m}> {m} </option>)
                }
              </select>
            </div>
            <div className="col-lg-3">
              <select onChange={(e) => onTimePeriodChange(e, 'to', 'year')} className="form-control">
                {
                  years.map((y, i)=> <option key={i} value={y}> {y} </option>)
                }
              </select>
            </div>
          <br/><br/><br/>
          <button className="btn btn-primary" onClick={onClickSave}>Save</button>
        </div>
      )
    }
  }

  export default Education;
