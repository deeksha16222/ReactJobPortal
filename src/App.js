import React, { Component } from 'react'
import {connect} from 'react-redux';
import Jobs from "./jobs.json";
import JobBriefList from "./components/JobBriefList";
import SearchBarForName from './components/SearchBarForName';
import SearchBarForLocation from './components/SearchBarForLocation';
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

            <JobBriefList jobs={jobsToShow} />
          </div>
        )
      }
    }

    

    return (
      <div className="container">
        {showJobList()}
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
  // console.log(state);
  
return { jobs: state.job.jobsData}
}

export default connect(mapStateToProps)(App);

