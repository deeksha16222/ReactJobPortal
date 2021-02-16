export const companySelected = (name) => {
    return {
        type: "COMPANY_SELECTED",
        payload: name
    }
}
export const setWorkExp = (info) => {
    return {
        type: "SET_WORK_EXP",
        payload: info
    }
}

export const delWorkExp = (info) => {
    return {
        type: "DEL_WORK_EXP",
        payload: info
    }
}
export const addSkill = (info) => {
    return {
        type: "ADD_SKILL",
        payload: info
    }
}
export const delSkill = (info) => {
    return {
        type: "DEL_SKILL",
        payload: info
    }
}
export const addEdu = (info) => {
    return {
        type: "ADD_EDU",
        payload: info
    }
}
export const delEdu = (info) => {
    return {
        type: "DEL_EDU",
        payload: info
    }
}
export const onSignIn = () => {
    return {
        type: "SIGN_IN",
    }
}
export const onSignOut = () => {
    return {
        type: "SIGN_OUT",
    }
}
export const setName = (name) =>{
    return {
        type : "NAME",
        payload : name
    }
}
export const setImage = (img) =>{
    return {
        type : "IMAGE",
        payload : img
    }
}