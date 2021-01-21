import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JobBrief from './JobBrief';
import Job from './Job';
import App from './App';

function nJobBrief(val) {
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

ReactDOM.render(
  <>
    {Job.map(nJobBrief)}
    <App/>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

