import React from 'react'
import App from './App';
import Profile from './components/Profile'
import { BrowserRouter, Route } from 'react-router-dom';
import CompanyData from './components/CompanyData';
import Nav from './components/Nav';

const JobPortal = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Route path="/find-jobs" exact component={App}/>
        <Route path="/profile"  component={Profile}/>
        <Route path="/companies" component={CompanyData}/>
      </BrowserRouter>
    </>
  )
}

export default JobPortal
