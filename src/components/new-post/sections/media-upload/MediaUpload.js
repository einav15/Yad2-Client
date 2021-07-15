import React from 'react'
import NextLastBtns from '../../NextLastBtns'
import MediaModule from './MediaModule'

const MediaUpload = ({ next, goBackToLastSection }) => {

    const image = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    const onSubmitForm = (e) => {
        e.preventDefault()
        next(true)
    }

    return (
        <>
            <h4 className="address-form__title"> ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות? <br />
לא להסס להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים הטובים ביותר של הנכס</h4>

            <img className="recommendation media-upload__message" alt="message" src="https://i.ibb.co/qNdgT3j/Screenshot-20210708-155723.png" />
            <form onSubmit={onSubmitForm} className="media-form">
                <div className="media-form__section video-section">
                    <MediaModule type="video" />
                    <MediaModule type="mainImg" />
                    <MediaModule type="invisible" />
                </div>
                <h4>תמונות שיופיעו בגוף המודעה</h4>
                <div className="media-form__section">
                    {image.map((n) => <MediaModule key={n} type="images" num={n} />)}
                </div>
                <NextLastBtns enableSubmit={true} goBackToLastSection={goBackToLastSection} lastSection={4} />
            </form>
        </>
    )
}

export default MediaUpload