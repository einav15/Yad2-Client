import { signupInitialState } from "../context/LoginContext"


const SignupReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_EMAIL_PASSWORD':
            return { ...state, email: action.email, password: action.password }
        case 'CHANGE_FIRST_NAME':
            return { ...state, firstName: action.firstName }
        case 'CHANGE_LAST_NAME':
            return { ...state, lastName: action.lastName }
        case 'CHANGE_BIRTH_DATE':
            return { ...state, birthDate: action.birthDate }
        case 'CHANGE_PHONE':
            return { ...state, phoneNumber: action.phoneNumber }
        case 'RESET':
            return signupInitialState
        default:
            return state
    }
}

export default SignupReducer

