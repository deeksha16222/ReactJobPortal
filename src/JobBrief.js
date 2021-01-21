import React from 'react'

function JobBrief(props){
    console.log(props);
return( 
  <>
      <div className="profile" style={{maxWidth: '20vw'}}/>
      <h4>{props.sname}</h4>
      <h5>{props.scity},{props.scountry}</h5>
      <img src={props.slogo} className="profilePostImage"/>
      <p>
        {props.sdescription}
      </p>
      <div className="profileSalary">{props.ssalary}</div>
      <button style={{backgroundColor: 'blue' , color: 'white'}}>Apply</button>
      <button style={{backgroundColor: 'red',  color: 'white'}}>Not interested</button>
      <hr/>
  </>
);
};
export default JobBrief;
