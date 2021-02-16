import React from 'react'
import { connect } from 'react-redux'
import { companySelected } from '../redux/actions'
import CompanyJob from './CompanyJob'


const CompanyData = (props) => {
    return (
        <div>
            {
                props.company.map(el => {
                    return (
                         <div className="company-name-btn" key={el.name}>
                        <button onClick={()=>props.companySelected(el.name)} className="ui button">{el.name}</button>
                        </div>
                    )
                })
            }
         
            <CompanyJob />
        </div>
    )
}


const mapStateToProp = (state) => {
    return { company: state.job.companyData }
}

export default connect(mapStateToProp, { companySelected })(CompanyData)
