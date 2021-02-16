import { combineReducers } from "redux"
import jobReducer from './jobReducer'
import authReducer from './authReducer'

export default combineReducers({
        job: jobReducer,
        auth: authReducer
    })
