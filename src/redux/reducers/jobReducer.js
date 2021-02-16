import data from './data.json'
import jobs from './jobs.json'

const defaultstate = {

  jobsData: jobs,
  companyData: data,
  selectedCompany: [],
  WorkExp: [],
  Skills: [],
  Education: []

}

const jobReducer = (state = defaultstate, action) => {

  switch (action.type) {
    case "COMPANY_SELECTED":
      const selected = state.companyData.filter(el => el.name === action.payload)
      return { ...state, selectedCompany: selected };
    case "SET_WORK_EXP":
      const exp = action.payload
      return { ...state, WorkExp: [...state.WorkExp, exp] };
    case "DEL_WORK_EXP":
      const filterItems = action.payload;
      return { ...state, WorkExp: filterItems }
    case "ADD_SKILL":
      const newskill = action.payload;
      return { ...state, Skills: [...state.Skills, newskill] }
    case "DEL_SKILL":
      const skill = action.payload;
      return { ...state, Skills: skill }
    case "ADD_EDU":
      const newEdu = action.payload;
      return { ...state, Education: [...state.Education, newEdu] }
    case "DEL_EDU":
      const edu = action.payload;
      return { ...state, Education: edu }
    default:
      return state;
  }
}
export default jobReducer;



