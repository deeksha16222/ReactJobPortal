import Jobs from "./jobs.json";
import JobBriefList from "./JobBriefList";
import SearchBarForName from './SearchBarForName';
import SearchBarForLocation from './SearchBarForLocation';
import { Component } from "react";

class App extends Component {
  state = {
    searchByJobName: "",
    searchByJobLocation: ""
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

    return (
      <div className="container">
        <div className="search-panel" style={{ marginTop: '20px' }}>
          <SearchBarForName onChange={this.handleSearchName} />
          <SearchBarForLocation onChange={this.handleSearchLocation} />
        </div>
        <JobBriefList jobs={jobsToShow} />
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

export default App;
