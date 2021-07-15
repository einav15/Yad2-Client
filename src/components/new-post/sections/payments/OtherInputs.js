import React, { useContext } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'

const OtherInputs = ({ info }) => {

    const { newPost, dispatchNewPost } = useContext(Yad2Context)

    const onChangeInput = (e) => {
        const inText = e.target.value
        if ((Number)(inText) || !inText) {
            const payments = { ...newPost.payments }
            payments[info.name] = inText
            dispatchNewPost({ type: "PROPERTY_PAYMENTS", payments })
        }
    }

    return (
        <div className="input__container">
            <label>{info.title}</label>
            <input placeholder={info.placeholder} value={newPost?.payments[info.name]} onChange={onChangeInput} />
            {info.name === 'price' && <span id="shekel">₪</span>}
        </div>

    )
}

export default OtherInputs



