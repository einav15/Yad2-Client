import React, { useContext } from 'react'
import { Yad2Context } from '../../context/Yad2Context'
import Address from './sections/Address'
import Category from './sections/Category'
import ContactInfo from './sections/contact/ContactInfo'
import MediaUpload from './sections/media-upload/MediaUpload'
import Payments from './sections/payments/Payments'
import PropertyInfo from './sections/propery-info/PropertyInfo'
import SectionDoneText from './sections/SectionDoneText'
import SubmitForm from './sections/SubmitForm'

const Section = ({ title, num, setOpenSection, openSection, dipatchEnabled, enabled }) => {

    const { dispatchNewPost } = useContext(Yad2Context)

    const continueToNextStep = () => {
        dipatchEnabled({ type: "ENABLE_SECTION", num: num + 1 })
        setOpenSection(num + 1)
    }

    const goBackToSection = () => {
        if (enabled[num] && openSection !== num) {
            setOpenSection(num)
            if (num === 1) {
                dispatchNewPost({ type: "RESET" })
                dipatchEnabled({})
            }
        }
    }

    const goBackToLastSection = (number) => {
        setOpenSection(number)
        if (number === 1) {
            dispatchNewPost({ type: "RESET" })
            dipatchEnabled({})
        }
    }


    const sectionsContent = [
        <Category next={continueToNextStep} />,
        <Address next={continueToNextStep} goBackToLastSection={goBackToLastSection} />,
        <PropertyInfo next={continueToNextStep} goBackToLastSection={goBackToLastSection} />,
        <Payments next={continueToNextStep} goBackToLastSection={goBackToLastSection} />,
        <MediaUpload next={continueToNextStep} goBackToLastSection={goBackToLastSection} />,
        <ContactInfo next={continueToNextStep} goBackToLastSection={goBackToLastSection} />,
        <SubmitForm />
    ]

    return (
        <div onClick={goBackToSection} key={title} className={"new-post-page__section " + (openSection === num ? "" : "unfocused-section ") + (enabled[num] && openSection !== num ? "hover-pointer" : "")}>
            <div className="new-post-page__section-title">
                {enabled[num] && openSection !== num ? <img className="green-check" alt="v" src="https://i.ibb.co/mqcpBnX/Screenshot-20210701-144915.png" /> : <span className="number-icon">{num}</span>}
                <div className="title-n-btn ">
                    <h2 className={openSection === num ? "opened-section-title" : ""}>{title}</h2>
                    {enabled[num] && openSection !== num && <SectionDoneText num={num} />}
                    {num !== 7 && enabled[num] && openSection !== num && <img className="edit-btn" alt="edit" src="https://i.ibb.co/hR6jCjV/Screenshot-20210701-144915.png" />}
                </div>
                {openSection === num && sectionsContent[num - 1]}
            </div>
        </div>
    )
}

export default Section