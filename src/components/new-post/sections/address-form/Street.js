import React, { useContext, useEffect, useState } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'
import streetsSearch from '../../../../data/streetsGraph.json'
import { boldString } from '../../../../utilities'

const Street = () => {

    const { newPost, dispatchNewPost } = useContext(Yad2Context)
    const [textState, setTextState] = useState(newPost.address.street)
    const [options, setOptions] = useState([])
    const [isFocus, setIsFocus] = useState(false)
    const [noStreetsInCity, setNoStreetsInCity] = useState(false)

    const onChangeSearchStreet = (e) => {
        setTextState(e.target.value)
        const address = newPost.address ? newPost.address : {}
        address.street = ''
        dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
    }

    const onClickPickStreet = (e) => {
        const chosenStreet = e.target.innerText
        setTextState(chosenStreet)
        const address = newPost.address ? newPost.address : {}
        address.street = chosenStreet
        dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
        setIsFocus(false)
    }

    const onClickDeleteText = () => {
        setTextState('')
        const address = newPost.address ? newPost.address : {}
        address.street = ""
        dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
    }

    useEffect(() => {
        if (!streetsSearch[newPost.address.city]) {
            const address = newPost.address
            address.street = "NONE"
            dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
            return setNoStreetsInCity(true)
        }
        setOptions(streetsSearch[newPost.address.city].filter((street) => street.includes(textState)).sort((a, b) => a > b))
    }, [textState, newPost.address])

    useEffect(() => {
        if (noStreetsInCity || !newPost.address.city)
            setTextState('')
        if (streetsSearch[newPost.address.city])
            setOptions(streetsSearch[newPost.address.city].filter((street) => street.includes(textState)).sort((a, b) => a > b))
    }, [noStreetsInCity, newPost.address.city, textState])

    useEffect(() => {
        if (streetsSearch[newPost.address.city])
            setNoStreetsInCity(false)
    }, [newPost, setNoStreetsInCity])


    return (
        <>
            {isFocus && <div onClick={() => setIsFocus(false)} className="address-form-overlay" />}
            <div className="input__container">
                <label className={!newPost.address.city ? "disabled" : ""}>רחוב*</label>
                <input
                    disabled={!newPost.address.city || noStreetsInCity}
                    placeholder="הכנסת שם הרחוב"
                    value={textState}
                    onChange={onChangeSearchStreet}
                    onFocus={() => setIsFocus(true)}
                />
                {textState && <div onClick={onClickDeleteText} className="delete-input">x</div>}
                {isFocus && options !== [] && <ul className="input-selector">
                    {options.map((option) => <li onClick={onClickPickStreet} key={option} dangerouslySetInnerHTML={{ __html: boldString(option, textState) }} />)}
                </ul>}
            </div>
        </>
    )
}

export default Street