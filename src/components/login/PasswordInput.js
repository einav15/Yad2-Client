import React, { useEffect, useState } from 'react'
// import { Yad2Context } from '../../context/Yad2Context'

const PasswordInput = ({ setPassword, type, repeatPassword }) => {

    const [password, setPass] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passFirstOpen, setPassFirstOpen] = useState(true)
    const [visible, setVisible] = useState(false)

    const validatePassword = (pass) => {
        const regex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{6,20}$/;
        if (regex.test(pass)) {
            setPasswordError('')
            return true
        } else if (pass.length < 6) {
            setPasswordError('מינימום 6 תווים')
            return false
        } else if (pass.length > 20) {
            setPasswordError('מקסימום 20 תווים')
            return false
        } else if (!/[a-z]/.test(pass)) {
            setPasswordError('לפחות אות קטנה אחת')
            return false
        } else if (!/[A-Z]/.test(pass)) {
            setPasswordError('לפחות אות גדולה אחת')
            return false
        } else if (!/\d/.test(pass)) {
            setPasswordError('לפחות ספרה אחת')
            return false
        } else
            setPasswordError('')

    }


    const onChangePassword = (e) => {
        setPassFirstOpen(false)
        const pass = e.target.value
        setPass(pass)
        if (pass === '')
            setPasswordError("שדה חובה")
        else if (type === 'validate') {
            if (pass !== repeatPassword)
                setPasswordError("סיסמה לא תואמת")
            else setPasswordError('')
        } else if (type === 'signup') {
            validatePassword(pass)
        } else setPasswordError('')
    }

    const showPass = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        if (password !== '' && passwordError === '') {
            setPassword(password)
        } else
            setPassword('')

    }, [password, passwordError, setPassword])

    return (
        <div className="password-container">
            <input
                name={type === 'validate' ? type : "password"}
                type={visible ? "text" : "password"}
                className={passFirstOpen ? "" : passwordError ? "error-border" : "valid-border"}
                value={password}
                onChange={onChangePassword}
                placeholder={type === 'validate' ? "חזור על הסיסמה שהקלדת" : type === "login" ? "הקלד סיסמה" : "6 תווים, אותיות באנגלית וספרה"}
            />
            <img onClick={showPass} className="visibility" alt="visible" src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxnPjxwYXRoIGQ9Ik0xNi4zMzMsMTMuNzU5TDE2LjMzMywxMy43NTljLTAuMDA2LTAuMDAxLTAuMDEyLTAuMDAxLTAuMDE4LTAuMDAxYy0wLjAwNiwwLTAuMDEyLDAtMC4wMTgsMHYwLjAwMSAgICBjLTEuMjEsMC4wMy0yLjE4MywxLjAyLTIuMTgzLDIuMjM3czAuOTcyLDIuMjA4LDIuMTgzLDIuMjM3djAuMDAyYzAuMDA2LDAsMC4wMTItMC4wMDIsMC4wMTgtMC4wMDIgICAgYzAuMDA1LDAsMC4wMTEsMC4wMDIsMC4wMTgsMC4wMDJ2LTAuMDAyYzEuMjE5LTAuMDI5LDIuMTgzLTEuMDIsMi4xODMtMi4yMzdTMTcuNTUyLDEzLjc4OSwxNi4zMzMsMTMuNzU5eiIgZmlsbD0iIzUxNTE1MSIvPjxwYXRoIGQ9Ik0yOS41ODYsMTQuMTg2Yy0yLjc2LTIuMjQ2LTcuNDA3LTUuNTEtMTMuMjUzLTUuNjIxdjBjLTAuMDA2LDAtMC4wMTIsMC0wLjAxOCwwYy0wLjAwNiwwLTAuMDEyLDAtMC4wMTgsMCAgICB2MEMxMC40NTMsOC42NzYsNS44MDEsMTEuOTQsMy4wNDEsMTQuMTg2Yy0wLjEzMiwwLjEwNy0xLjAzNiwwLjgtMS4wNTEsMS42ODZjLTAuMDExLDAuNjI0LDAuMjgsMS4wODUsMC42OTksMS40NzEgICAgYzIuMjU1LDIuMTgxLDcuMTc2LDYuMDU5LDEzLjYwOSw2LjA4N3YwLjAwMmMwLjAwNiwwLDAuMDEyLDAsMC4wMTgsMGMwLjAwNSwwLDAuMDExLDAsMC4wMTgsMHYtMC4wMDIgICAgYzYuNDQ1LTAuMDI4LDExLjM1MS0zLjkwNiwxMy42MDctNi4wODdjMC40MTktMC4zODYsMC43MDktMC44NDcsMC42OTctMS40NzFDMzAuNjIxLDE0Ljk4NiwyOS43MTksMTQuMjkzLDI5LjU4NiwxNC4xODZ6ICAgICBNMTYuMzE1LDIxLjc1MmMtMy4xNjItMC4wMjEtNS43MTktMi41OS01LjcxOS01Ljc1NnMyLjU1Ny01LjczNSw1LjcxOS01Ljc1NWMzLjE3LDAuMDIsNS43MTgsMi41ODksNS43MTgsNS43NTUgICAgUzE5LjQ4NSwyMS43MywxNi4zMTUsMjEuNzUyeiIgZmlsbD0iIzUxNTE1MSIvPjwvZz48L2c+PC9zdmc+' />
            {visible ? <></> : <img onClick={showPass} className="invisibility" alt="invisible" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIFVYV2luZyBTVkcgRWRpdG9yIC0gaHR0cHM6Ly91eHdpbmcuY29tL3N2Zy1pY29uLWVkaXRvci8gLS0+CiA8Zz4KICA8dGl0bGU+YmFja2dyb3VuZDwvdGl0bGU+CiAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjUxNCIgd2lkdGg9IjUxNCIgeT0iLTEiIHg9Ii0xIi8+CiAgPGcgZGlzcGxheT0ibm9uZSIgb3ZlcmZsb3c9InZpc2libGUiIHk9IjAiIHg9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIGlkPSJjYW52YXNHcmlkIj4KICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPgogIDwvZz4KIDwvZz4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8bGluZSBzdHJva2UtbGluZWNhcD0idW5kZWZpbmVkIiBzdHJva2UtbGluZWpvaW49InVuZGVmaW5lZCIgaWQ9InN2Z18xIiB5Mj0iMTc3IiB4Mj0iMzkxIiB5MT0iMzg0IiB4MT0iMjY0IiBzdHJva2Utd2lkdGg9IjAuMDAxIiBzdHJva2U9IiNGRjAwMDAiIGZpbGw9Im5vbmUiLz4KICA8bGluZSBzdHJva2UtbGluZWNhcD0idW5kZWZpbmVkIiBzdHJva2UtbGluZWpvaW49InVuZGVmaW5lZCIgaWQ9InN2Z18yIiB5Mj0iMTk0IiB4Mj0iMzI1IiB5MT0iMzYwIiB4MT0iMzM0IiBzdHJva2Utd2lkdGg9IjAuMDAxIiBzdHJva2U9IiNGRjAwMDAiIGZpbGw9Im5vbmUiLz4KICA8bGluZSBzdHJva2UtbGluZWNhcD0idW5kZWZpbmVkIiBzdHJva2UtbGluZWpvaW49InVuZGVmaW5lZCIgaWQ9InN2Z180IiB5Mj0iMjM5IiB4Mj0iNDQyIiB5MT0iNDQ4IiB4MT0iMjQ2IiBzdHJva2Utd2lkdGg9IjAuMDAxIiBzdHJva2U9IiM5OTk5OTkiIGZpbGw9Im5vbmUiLz4KICA8bGluZSBzdHJva2UtbGluZWNhcD0idW5kZWZpbmVkIiBzdHJva2UtbGluZWpvaW49InVuZGVmaW5lZCIgaWQ9InN2Z181IiB5Mj0iNDg5IiB4Mj0iNDA2IiB5MT0iNTkiIHgxPSIyMTEiIHN0cm9rZS13aWR0aD0iMC4wMDEiIHN0cm9rZT0iIzk5OTk5OSIgZmlsbD0ibm9uZSIvPgogIDxsaW5lIHN0cm9rZS1saW5lY2FwPSJ1bmRlZmluZWQiIHN0cm9rZS1saW5lam9pbj0idW5kZWZpbmVkIiBpZD0ic3ZnXzYiIHkyPSIzMTIiIHgyPSIzMTAiIHkxPSIzMTUiIHgxPSIzMDgiIHN0cm9rZS13aWR0aD0iMC4wMDEiIHN0cm9rZT0iIzk5OTk5OSIgZmlsbD0ibm9uZSIvPgogIDxsaW5lIHN0cm9rZS1saW5lY2FwPSJ1bmRlZmluZWQiIHN0cm9rZS1saW5lam9pbj0idW5kZWZpbmVkIiBpZD0ic3ZnXzciIHkyPSIyNzciIHgyPSIyNzIiIHkxPSIyNzYiIHgxPSIyNzciIHN0cm9rZS13aWR0aD0iMC4wMDEiIHN0cm9rZT0iIzk5OTk5OSIgZmlsbD0ibm9uZSIvPgogIDxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDI0Ljk2OCwgMjQ0LCAyNjIuNSkiIGlkPSJzdmdfOCIgaGVpZ2h0PSIyNTkiIHdpZHRoPSIxMCIgeT0iMTMzIiB4PSIyMzkiIHN0cm9rZS13aWR0aD0iMC4wMDEiIHN0cm9rZT0iI0ZGMDAwMCIgZmlsbD0iI2ZmZmZmZiIvPgogIDxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDI0Ljk2OCwgMjM3LCAyNTguNSkiIGlkPSJzdmdfOSIgaGVpZ2h0PSIyNTkiIHdpZHRoPSIxMCIgeT0iMTI5IiB4PSIyMzIiIHN0cm9rZS13aWR0aD0iMC4wMDEiIHN0cm9rZT0iI0ZGMDAwMCIgZmlsbD0iIzk5OTk5OSIvPgogPC9nPgo8L3N2Zz4=" />}
            {passwordError && <span className="error-text">{passwordError}</span>}
        </div>

    )
}

export default PasswordInput