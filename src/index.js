import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import JobBrief from './JobBrief';
//import Job from './Job';
//import App from './App';
import SpinnerComponent from './SpinnerComponent';

{/*function JobBriefList(val) {
  console.log(val);
return (
<JobBrief sname = {val.sname}
slocation = {val.slocation}
scity = {val.scity}
scountry = {val.scountry}
sdescription = {val.sdescription}
ssalary = {val.ssalary}
slogo = {val.slogo}
/>
);   
};
*/}

ReactDOM.render(
  <>
    {/*{Job.map(JobBriefList)}*/}
    <SpinnerComponent/>
  </>,
  document.getElementById('root')
);

