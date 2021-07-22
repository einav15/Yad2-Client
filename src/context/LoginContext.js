import Axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import Cookies from 'universal-cookie';
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

    const cookies = new Cookies();

    const getUserFromCookies = async () => {
        const token = cookies.get('user')
        await Axios.post(`${dbUrl}users/login-cookie`, { token })
            .then(res => {
                const user = res.data.user ? res.data : null
                dispatchUser({ type: "LOGIN", user })
            })
            .catch(err => console.log(err))
    }

    const [user, dispatchUser] = useReducer(UsersReducer, null)
    const [signupForm, dispatchSignupForm] = useReducer(SignupReducer, signupInitialState)

    //login from cookie if existing
    useEffect(() => {
        getUserFromCookies()
    }, [])

    return (
        <LoginContext.Provider value={{
            //states and reducers to pass
            user, dispatchUser, cookies,
            signupForm, dispatchSignupForm
        }}>
            {props.children}
        </LoginContext.Provider>
    )
}



export default LoginContextProvider