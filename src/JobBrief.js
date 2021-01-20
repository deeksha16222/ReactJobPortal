import React from 'react'

function Card(props){
    console.log(props);
return( 
  <>
      <div className="card" style={{maxWidth: '20vw'}}/>
      <h4>{props.sname}</h4>
      <h5>{props.scity},{props.scountry}</h5>
      <img src={props.slogo} className="cardPostImage"/>
      <p>
        {props.sdescription}
      </p>
      <div className="cardSalary">{props.ssalary}</div>
      <button style={{backgroundColor: 'blue' , color: 'white'}}>Apply</button>
      <button style={{backgroundColor: 'red',  color: 'white'}}>Not interested</button>
      <hr/>
  </>
);
};
export default Card;
