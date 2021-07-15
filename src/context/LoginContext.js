import React, { useReducer } from 'react'
import SignupReducer from '../reducers/SignupReducer'
import UsersReducer from '../reducers/UsersReducer'
export const LoginContext = React.createContext()
export const dbUrl = "http://localhost:3001/"
export const signupInitialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: null,
    phoneNumber: ''
}

const LoginContextProvider = (props) => {

    const [user, dispatchUser] = useReducer(UsersReducer, null)
    const [signupForm, dispatchSignupForm] = useReducer(SignupReducer, signupInitialState)

    return (
        <LoginContext.Provider value={{
            //states and reducers to pass
            user, dispatchUser,
            signupForm, dispatchSignupForm
        }}>
            {props.children}
        </LoginContext.Provider>
    )
}



export default LoginContextProvider