import React, { useContext, useEffect, useState } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'
import citiesArray from '../../../../data/citiesArray.json'
import { boldString } from '../../../../utilities'



const City = () => {

    const { newPost, dispatchNewPost } = useContext(Yad2Context)
    const [textState, setTextState] = useState(newPost.address.city)
    const [options, setOptions] = useState([])
    const [isFocus, setIsFocus] = useState(false)

    const onChangeSearchCity = (e) => {
        setTextState(e.target.value)
        const address = newPost.address ? { ...newPost.address } : {}
        address.city = e.target.value
        dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
    }

    const onClickPickCity = (e) => {
        const chosenCity = e.target.innerText
        setTextState(chosenCity)
        const address = newPost.address ? { ...newPost.address } : {}
        address.city = chosenCity
        dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
        setIsFocus(false)
    }

    const onClickDeleteText = () => {
        setTextState('')
        const address = newPost.address ? { ...newPost.address } : {}
        address.city = ''
        dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
    }

    useEffect(() => {
        setOptions(citiesArray.filter((city) => city.includes(textState)))
    }, [textState])

    return (
        <>
            {isFocus && <div onClick={() => setIsFocus(false)} className="address-form-overlay" />}

            <div className="input__container">
                <label>ישוב*</label>
                <input
                    placeholder="איפה נמצא הנכס?"
                    value={newPost.address.city}
                    onChange={onChangeSearchCity}
                    onFocus={() => setIsFocus(true)}
                />
                {textState && <div onClick={onClickDeleteText} className="delete-input">x</div>}
                {textState?.length > 1 && isFocus && options !== [] && <ul className="input-selector">
                    {options.map((option) =>
                        <li onClick={onClickPickCity} key={option} dangerouslySetInnerHTML={{ __html: boldString(option, textState) }}></li>
                    )}
                </ul>}
            </div>
        </>
    )
}

export default City