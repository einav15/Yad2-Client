import React, { useContext, useEffect, useState } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'

const ContactInputs = ({ value, title, type, isMain }) => {

    const { newPost, dispatchNewPost } = useContext(Yad2Context)
    const [input, setInput] = useState(value)

    useEffect(() => {
        const contact = { ...newPost.contact }
        if (type === "email")
            contact.email = input
        else if (isMain)
            contact.main[type] = input
        else
            contact.second[type] = input

        dispatchNewPost({ type: "PROPERTY_CONTACT", contact })
    }, [input])

    return (
        <div className="input__container">
            <label>{title}</label>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    )
}

export default ContactInputs