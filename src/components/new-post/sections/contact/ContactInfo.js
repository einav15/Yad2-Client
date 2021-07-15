import React, { useContext, useState } from 'react'
import { LoginContext } from '../../../../context/LoginContext'
import NextLastBtns from '../../NextLastBtns'
import ContactInputs from './ContactInputs'
import AnotherContact from './AnotherContact'

const ContactInfo = ({ next, goBackToLastSection }) => {

    const { user } = useContext(LoginContext)
    const [enableSubmit, setEnableSubmit] = useState(false)
    const [enableEmailAds, setEnableEmailAds] = useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        next(true)
    }

    return (
        <>
            <h4 className="address-form__title">רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים</h4>
            <form onSubmit={onSubmitForm} className="contact-form">
                <div className="contact-inputs__container">
                    <ContactInputs value={user.user.firstName} title="שם איש קשר*" type="name" isMain={true} />
                    <ContactInputs value={user.user.phoneNumber} title="טלפון ראשי*" type="number" isMain={true} />
                </div>
                <AnotherContact />
                <ContactInputs value={user.user.email} title="*אימייל" type="email" />
                <div className="contact__checkbox-container with-backgroung">
                    <input readOnly={true} checked={enableSubmit} type="checkbox" />
                    <span>קראתי ואישרתי את <span style={{ color: "#ff7100" }}>התקנון</span>, זה חשוב</span>
                    <div onClick={() => setEnableSubmit(!enableSubmit)} className="contact__checkboxes-overlay" />
                </div>
                <div className="contact__checkbox-container">
                    <input readOnly={true} checked={enableEmailAds} type="checkbox" />
                    <span>אני רוצה שתשלחו לי עדכונים למייל </span>
                    <div onClick={() => setEnableEmailAds(!enableEmailAds)} className="contact__checkboxes-overlay" />
                </div>
                <br /> <br />
                <NextLastBtns enableSubmit={enableSubmit} goBackToLastSection={goBackToLastSection} lastSection={5} />


            </form>
        </>
    )
}

export default ContactInfo