import React from 'react';
import JobBrief from './JobBrief';

const Results = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((job, index) => (
        <JobBrief key={job.id} {...job} index={index} />
      ))}
    </div>
  );
};
