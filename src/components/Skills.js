import {useState} from 'react';

function Skills () {
  const [showSkill, setShowSkill] = useState(false);
  const [skills, setSkills] = useState([]);

  const onSkillSubmit = (skill) => {
    setSkills([...skills, skill])
  }

  const onSkillRemove = (skillName)  => {
    const filteredArr = skills.filter(skill => skill.name !== skillName);
    setSkills(filteredArr)
  } 
  
  const buttonText = showSkill ? 'Close' : 'Add';

    return (
      <div style={{paddingLeft : '0px !important', display:'block'}}>
        <div className="row">
          <div className="col-lg-6">
            <strong>Skills</strong>
          </div>
          <div className="col-lg-6">
            <button className="btn btn-primary" onClick={() => setShowSkill(!showSkill)}>{buttonText}</button>
          </div>
          <div className="col-lg-12">
            <ShowSkills show={showSkill} onSkillSubmit={onSkillSubmit}/>
          </div>
        </div>
        {
          skills && skills.length > 0 &&
          skills.map((skill, idx) =>{
            const {name, rating} = skill;
            return (
              <div className="row mt-4" key={idx}>
                <div className="col-lg-6">
                  <div className="col-lg-6">
                    <strong> {name} </strong>
                  </div>
                  <div className="col-lg-6">
                    {`Rating: ${rating} / 10 `}
                  </div>
                <br/>
                </div>
                <div className="col-lg-6">
                  <button className="btn btn-danger" onClick={() => onSkillRemove(skill.name)}>Remove</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )

    function ShowSkills (props) {
      const {onSkillSubmit, show} = props;

      const [values, setValues] = useState({name: '', rating: ''});

      if(!show) return null;

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
      };

      const onClickSave = () => onSkillSubmit(values);

      return (
        <div className="row">
          <div className="col-lg-12">
            <label>Skill/Technology Name</label>
            <input value={values.name} name="name" onChange={handleInputChange} type="text" className="form-control"/>
          </div>
          <div className="col-lg-12">
            <label>Rating out of 10</label>
            <input value={values.rating} name="rating" onChange={handleInputChange} type="text" className="form-control"/>
          </div>  
          <button className="btn btn-primary" onClick={onClickSave}>Save</button>      
        </div>
      )

    }
  }

  export default Skills;
