import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../../utilities'

const PhoneBtn = ({ contact }) => {

    const [isOpen, setIsOpen] = useState(false)

    const onClickPhoneBtn = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }
    return (
        <>
            <button onClick={onClickPhoneBtn} className="phone__btn">
                <FontAwesomeIcon icon={icons.faPhone} />
                <p className="show-contact">הצגת מספר טלפון</p>
            </button>
            {isOpen && <div onClick={(e) => e.stopPropagation()} className="contact-info">
                <div className="contact-info__item">
                    {contact.main.name}
                </div>
                <div className="contact-info__item">
                    {contact.main.number}
                </div>
                {contact.second.name !== "" && <div className="contact-info__item">
                    {contact.second.name}
                </div>}
                {contact.second.number !== "" && <div className="contact-info__item">
                    {contact.second.number}
                </div>}
                <div className="contact-info__item send-email">
                    שליחת דוא״ל למפרסם
                </div>
            </div>}
        </>
    )
}

export default PhoneBtn