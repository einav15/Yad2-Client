import React, { useContext, useEffect, useState } from 'react'
import { icons } from '../../../utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchContext } from '../../../context/SearchContext'


const OtherFilterBtns = () => {

    const { listings, setListings, title } = useContext(SearchContext)
    const [isWithPriceOnly, setIsWithPriceOnly] = useState(false)
    const [isWithPicsOnly, setIsWithPicsOnly] = useState(false)
    const [filteredOut, setFilteredOut] = useState([])

    const filterNoPics = (listing) => {
        const media = listing.mediaUrls
        return media.mainImg || media.video || media.images.length > 0
    }

    useEffect(() => {
        if (isWithPicsOnly) {
            setListings([...listings].filter((listing) => filterNoPics(listing)))
            setFilteredOut([...listings].filter((listing) => !filterNoPics(listing)))
        }
        else {
            let ret = [...listings].concat(filteredOut)
            switch (title) {
                case "לפי תאריך":
                    ret.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
                    break
                case "מחיר - מהזול ליקר":
                    ret.sort((a, b) => a.payments.price - b.payments.price)
                    break
                case "מחיר - מהיקר לזול":
                    ret.sort((a, b) => b.payments.price - a.payments.price)
                    break
                default:
                    break
            }
            setListings(ret)
        }
    }, [isWithPicsOnly])

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