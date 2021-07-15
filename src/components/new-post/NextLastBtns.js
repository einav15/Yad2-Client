import React from 'react'

const NextLastBtns = ({ enableSubmit, goBackToLastSection, lastSection }) => {

    return (
        <div className="address-form_btns">
            <button onClick={() => goBackToLastSection(lastSection)}>חזרה</button>
            <button disabled={!enableSubmit} type="submit" className={"address-form_btns-next" + (enableSubmit ? "" : " disabled-btn")}>להמשיך לשלב הבא</button>
        </div>
    )
}

export default NextLastBtns