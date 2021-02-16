import React from 'react'
import {connect} from 'react-redux'
import JobList from './JobBriefList'


const CompanyJob = (props) => {
  return (
    <>
    {props.list.map(el=>{
        return (
            <div className="company-job" key={el.id}> 
            <h4>{`Jobs from ${el.name}`}</h4>
            <JobList  jobs={el.jobs} /> 
            </div>
        )
    }
    )}
    </>
  )
}

const mapStateToProp = (state) =>{
    return {
        list : state.job.selectedCompany
    }
}
export default connect(mapStateToProp)(CompanyJob)
