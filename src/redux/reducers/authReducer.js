const INITIAL_STATE = {
    isSignedIn: null,
    name: "",
    image: ""
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return { ...state, isSignedIn: true }
        case "SIGN_OUT":
            return { ...state, isSignedIn: false }
        case "NAME":
            return { ...state, name: action.payload }
        case "IMAGE":
            return { ...state, image: action.payload }
        default:
            return state
    }
}
export default authReducer;