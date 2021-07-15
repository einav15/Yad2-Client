import React, { useState } from 'react'

const FilterDropdownRadio = ({ name, value, setValue }) => {


    return (
        <div className="filter-radio-btn__container">
            <div className={"radio-btn-visual " + (value === name ? "orange-border" : "")}>
                {value === name && <div className="radio-btn-visual__middle" />}
            </div>
            <input onClick={(e) => setValue(e.target.value)} type="radio" name="sort" value={name} />
            <span>{name}</span>
        </div>
    )
}

export default FilterDropdownRadio