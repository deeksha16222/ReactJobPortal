import React, { Component } from "react";
import {connect} from 'react-redux';
import Jobs from "./jobs.json";
import JobBriefList from "./components/JobBriefList";
import SearchBarForName from './components/SearchBarForName';
import SearchBarForLocation from './components/SearchBarForLocation';
import CompanyData from './components/CompanyData';
import Profile from './components/Profile';
class App extends Component {
  state = {
    searchByJobName: "",
    searchByJobLocation: "",
  }

  render() {
    const { searchByJobName = "", searchByJobLocation = "" } = this.state;

    const jobsToShow = Jobs.filter(job => {
      const { name, location: { city, country } } = job;

      if (searchByJobName) {
        const nameMatch = name.toLowerCase().includes(searchByJobName);
        if (!nameMatch) return false;
      }

      if (searchByJobLocation) {
        const locationMatch = city.toLowerCase().includes(searchByJobLocation) || country.toLowerCase().includes(searchByJobLocation);
        if (!locationMatch) return false;
      }

      return true;
    });

    const showJobList = () => {
      if(window.location.pathname === '/') {
        return (
          <div>
            <div className="search-panel" style={{ marginTop: '20px', display: 'inline-block' }}>
              <SearchBarForName onChange={this.handleSearchName} />
              <SearchBarForLocation onChange={this.handleSearchLocation} />
            </div>
            <a 
              className="btn btn-primary"
              href="/profile"
              target="_blank"
              style={{display: 'inline-block', color:"white", marginLeft: '170px'}}>
                See Your Profile
            </a>
            <a 
              className="btn btn-primary"
              href="/companies"
              target="_blank"
              style={{display: 'inline-block', color:"white", marginLeft: '170px'}}>
                See companies' jobs
            </a>
            <JobBriefList jobs={jobsToShow} />
          </div>
        )
      }
    }

    const showProfile = () => {
      if(window.location.pathname === '/profile') return <Profile />;
    }

    const showCompanies = () => {
      if(window.location.pathname === '/companies') return <CompanyData/>;
    }

    return (
      <div className="container">
        {showJobList()}
        {showProfile()}
        {showCompanies()}
      </div>
    );
  }
  
  handleSearchName = searchByJobName => this.setState({
    searchByJobName: searchByJobName.toLowerCase()
  });

  handleSearchLocation = searchByJobLocation => this.setState({
    searchByJobLocation: searchByJobLocation.toLowerCase()
  });

}

const mapStateToProps = (state) => {
  return { jobs: state.job.jobsData}
}

export default connect(mapStateToProps)(App);
