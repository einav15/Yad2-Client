import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'

const NameInput = ({ type }) => {

    const { dispatchSignupForm } = useContext(LoginContext)

    const [name, setName] = useState('')
    const [nameFirstOpen, setNameFirstOpen] = useState(true)
    const [error, setError] = useState('')


    const onChangeSetName = (e) => {
        const input = e.target.value
        setNameFirstOpen(false)
        setName(input)
        if (input.length === 0)
            setError('שדה חובה')
        else if (!/[^0-9()[\]*&^%$#@!{}]+/.test(input))
            setError('אותיות בלבד')
        else {
            setError('')
        }
    }

    useEffect(() => {
        if (!error) {
            if (type === 'first')
                dispatchSignupForm({ type: "CHANGE_FIRST_NAME", firstName: name })
            else
                dispatchSignupForm({ type: "CHANGE_LAST_NAME", lastName: name })

        }
    }, [error, name, dispatchSignupForm, type])


    return (
        <>
            <label>שם {type === 'first' ? "פרטי" : "משפחה"}</label>
            <input
                name={type}
                value={name}
                onChange={onChangeSetName}
                className={nameFirstOpen ? "" : error ? "error-border" : "valid-border"}
            />
            {error && <span className="error-text">{error}</span>}

        </>
    )
}

export default NameInput

