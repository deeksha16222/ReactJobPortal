import React, { Component } from 'react';
import JobBrief from "./JobBrief";
import JobDetails from './JobDetails';

class JobBriefList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selectedJobIndex: null
    }
  }

  componentDidMount() {
    const timeoutId = setTimeout(() => { this.setState({ isLoading: false }) }, 200);
    this.setState({ timeoutId });
  }

  componentWillUnmount() {
    const { timeoutId } = this.state;
    if (timeoutId) clearTimeout(timeoutId);
  }

  render() {
    const { isLoading, selectedJobIndex } = this.state;
    const { jobs } = this.props;

    if (isLoading) return <span>Loading ...</span>;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div style={{ maxWidth: "300px", alignItems: "center", marginTop: "20px", display: 'inline-block' }} className="border rounded">
              {this.showJobList()}
            </div>
          </div>
          <div className="col-lg-7">
            <div style={{ position: "fixed" }}>
              <JobDetails job={jobs[selectedJobIndex]} />
            </div>
          </div>
        </div>
      </div>
    )
  };

  showJobList = () => {
    const { jobs = [] } = this.props;

    if (jobs.length === 0) return <h4>No Jobs found...</h4>;

    return jobs.map((job, index) => <JobBrief job={job} onClick={() => this.handleJobClick(index)} />);
  }

  handleJobClick = selectedJobIndex => this.setState({ selectedJobIndex });

};

export default JobBriefList;
