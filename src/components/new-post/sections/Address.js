import React, { useContext, useEffect, useState } from 'react'
import { Yad2Context } from '../../../context/Yad2Context'
import City from './address-form/City'
import PropertyType from './address-form/PropertyType'
import Street from './address-form/Street'
import Floors from './address-form/Floors'
import NextLastBtns from '../NextLastBtns'


const Address = ({ next, goBackToLastSection }) => {


    const { newPost, dispatchNewPost, screenWidth } = useContext(Yad2Context)
    const [validHouseNum, setValidHouseNum] = useState(false)
    const [houseNumFirstOpen, setHouseNumFirstOpen] = useState(true)
    const [enableSubmit, setEnableSubmit] = useState(false)

    const setHouseNum = (e) => {
        setHouseNumFirstOpen(false)
        const input = e.target.value
        const address = newPost.address ? { ...newPost.address } : {}
        address.number = input
        if (input)
            setValidHouseNum(true)
        else
            setValidHouseNum(false)
        dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
    }


    const onSubmitForm = (e) => {
        e.preventDefault()
        next(true)
    }

    useEffect(() => {
        if (newPost.address.city !== "" && newPost.address.street !== "" && newPost.address.floorNum !== "" && newPost.address.floorsInBuilding !== "")
            setEnableSubmit(true)
        else
            setEnableSubmit(false)
    }, [newPost, setEnableSubmit])

    return (
        <>
            <img className="recommendation" alt="המלצה" src={screenWidth > 550 ? "https://i.ibb.co/FHcZP8C/Screenshot-20210701-144915.png" : "https://i.ibb.co/Dz4NGsj/Screenshot-20210711-150630.png"} />
            <h4 className="address-form__title">סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</h4>
            <form onSubmit={onSubmitForm}>
                <PropertyType />
                <City />
                <Street />
                <div className="input__container">
                    <label>מס' בית*</label>
                    <input
                        min={0}
                        max={9999}
                        disabled={!newPost.address.street}
                        style={{ width: "100px" }}
                        value={newPost.address.number}
                        onChange={setHouseNum}
                        className={"address-form__small-input " + (houseNumFirstOpen ? "" : validHouseNum ? "" : "invalid-input")}
                    />
                    {!houseNumFirstOpen && !validHouseNum && <div className="error-text">יש לבחור מס' בית </div>}
                </div>
                <Floors />
                <NextLastBtns enableSubmit={enableSubmit} goBackToLastSection={goBackToLastSection} lastSection={1} />

            </form>
        </>
    )
}

export default Address