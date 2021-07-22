import React, { useState } from 'react'
import { icons } from '../../../../utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactInputs from './ContactInputs'

const AnotherContact = () => {

    const [isSecondOpen, setIsSecondOpen] = useState(false)

    return (
        <>
            {!isSecondOpen ?
                <span onClick={() => setIsSecondOpen(true)} className="another-contact"><FontAwesomeIcon icon={icons.faPlusCircle} /> הוספת איש קשר נוסף </span>
                :
                <div className="contact-inputs__container">
                    <ContactInputs title="איש קשר נוסף" type="name" />
                    <ContactInputs title="טלפון נוסף" type="number" />
                    <div onClick={() => setIsSecondOpen(false)} className="contact-inputs__cancel-btn">
                        <FontAwesomeIcon icon={icons.faTrashAlt} />ביטול
                    </div>
                </div>
            }
        </>
    )
}

export default AnotherContact