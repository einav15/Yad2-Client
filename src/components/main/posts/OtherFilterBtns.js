import React, { useState } from 'react'
import { icons } from '../../../context/Yad2Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const OtherFilterBtns = () => {

    const [isWithPriceOnly, setIsWithPriceOnly] = useState(false)
    const [isWithPicsOnly, setIsWithPicsOnly] = useState(false)

    return (
        <>
            <li className="filter-btn__container">
                <span className="filter-btn__label">הצג מודעות</span>
                <button onClick={() => setIsWithPriceOnly(!isWithPriceOnly)} className={"filter-btn show-only " + (isWithPriceOnly ? "chosen" : "")}>₪ עם מחיר</button>
                <button onClick={() => setIsWithPicsOnly(!isWithPicsOnly)} className={"filter-btn show-only " + (isWithPicsOnly ? "chosen" : "")}>  <FontAwesomeIcon icon={icons.faImage} /> עם תמונות</button>
            </li>
            <li className="filter-btn__container">
                <button onClick={() => { }} className="filter-btn show-only ">  <FontAwesomeIcon style={{ width: "12px" }} icon={icons.faLocationArrow} /> תצוגת מפה</button>
            </li>
        </>
    )
}

export default OtherFilterBtns