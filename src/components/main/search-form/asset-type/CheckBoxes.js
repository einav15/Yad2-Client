import React from 'react'

const CheckBoxes = ({ checkedBoxes, name, checkBox }) => {

    const onChange = () => { }

    return (
        <li key={name} className="asset-type-list__item" onClick={checkBox}>
            <input checked={checkedBoxes[name]} onChange={onChange} name={name} type="checkbox" />
            <span>{name}</span>
            <div className="overlay" />
        </li>
    )
}

export default CheckBoxes