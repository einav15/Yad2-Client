import React, { useState } from 'react'
import Dropdown from './Dropdown'
import ExpandCollapse from '../ExpandCollapse'

const AssetType = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [checked, setChecked] = useState(0)

    const onClickOpen = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }


    return (
        <div className="form-input property-type-length">
            <span>סוג נכס</span>
            <button type="button" onClick={onClickOpen} className="search-dropdown__btn" id="asset-type-btn">
                {(checked > 0 && checked < 22) ? <span id="reg-color-for-btn">{checked} סוגי נכסים</span>
                    : <span>בחרו סוגי נכסים</span>}

                <ExpandCollapse isDropdownOpen={isDropdownOpen} />
            </button>
            {
                isDropdownOpen && <Dropdown setIsDropdownOpen={setIsDropdownOpen} checked={checked} setChecked={setChecked} />
            }
        </div>
    )
}

export default AssetType