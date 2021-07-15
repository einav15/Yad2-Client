import React, { useContext, useState } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'



const RadioBtns = ({ type }) => {
    const { newPost, dispatchNewPost } = useContext(Yad2Context)

    const getInitialState = () => {
        const ret = [false, false, false, false]
        ret[newPost.propertyInfo[type]] = true
        return ret
    }

    const [active, setActive] = useState(getInitialState())

    const onChangeRadioBtn = (e) => {
        const choice = e.target.value
        const newActive = [false, false, false, false]
        newActive[choice] = true
        setActive(newActive)
        const propertyInfo = { ...newPost.propertyInfo }
        propertyInfo[type] = choice
        dispatchNewPost({ type: "PROPERTY_INFO", propertyInfo })
    }

    return (
        <div className="radio-btns__container">
            <div style={{ borderRadius: "0 3px 3px 0" }} className={"relative-div" + (active[0] ? " active-radio-btn" : "")}>
                <input onChange={onChangeRadioBtn} value={0} name="parking" type="radio" className="radio-btn" />
                <span style={{ padding: "0 0.65rem" }}>ללא</span>
            </div>
            <div className={"relative-div border-left border-right" + (active[1] ? " active-radio-btn" : "")}>
                <input onChange={onChangeRadioBtn} value={1} name="parking" type="radio" className="radio-btn" />
                <span>1</span>
            </div>
            <div className={"relative-div border-left" + (active[2] ? " active-radio-btn" : "")}>
                <input onChange={onChangeRadioBtn} value={2} name="parking" type="radio" className="radio-btn" />
                <span>2</span>
            </div>
            <div style={{ borderRadius: "3px 0 0 3px" }} className={"relative-div" + (active[3] ? " active-radio-btn" : "")}>
                <input value={3} onChange={onChangeRadioBtn} name="parking" type="radio" className="radio-btn" />
                <span style={{ padding: "0 0.8rem" }}>3</span>
            </div>
        </div>

    )
}

export default RadioBtns