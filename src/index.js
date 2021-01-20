import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './JobBrief';
import Sdata from './Sdata';
import App from './App';

function ncard(val) {
  console.log(val);
return (
<Card sname = {val.sname}
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
    {Sdata.map(ncard)}
    <App/>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

