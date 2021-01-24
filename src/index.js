import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import JobBrief from './JobBrief';
//import Job from './Job';
import App from './App';
//import SpinnerComponent from './Spinner';

{/*function nJobBrief(val) {
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

{/*ReactDOM.render(
  <>
    <h1><SpinnerComponent/></h1>
    {Job.map(nJobBrief)}
    <App/>
  </>,
  document.getElementById('root')
);
*/}

ReactDOM.render(
  <>
  <App/>
  </>,
  document.getElementById('root')
);

