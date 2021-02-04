import { useState, useEffect } from "react";
import JobBrief from "./JobBrief";
import JobDetails from './JobDetails';

function JobBriefList ({jobs}) {
  const [isLoading, setLoading] = useState(true);
  const [selectedJobIndex, setJobIndex] = useState(null);
    
  useEffect(
     () => {
       let timer1 = setTimeout(() => setLoading(false), 1000)
        return () => {
         clearTimeout(timer1)
       }
     }, [])

    if (isLoading) return <span>Loading ...</span>;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div style={{ maxWidth: "300px", alignItems: "center", marginTop: "20px", display: 'inline-block' }} className="border rounded">
              {showJobList()}
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
  ;

  function showJobList () {
    if (jobs.length === 0) return <h4>No Jobs found...</h4>;

    return jobs.map((job, index) => <JobBrief key={index} job={job} onClick={() => setJobIndex(index)} />);
  }
};

export default JobBriefList;
