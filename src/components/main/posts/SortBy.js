import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../../context/SearchContext'
import ExpandCollapse from '../search-form/ExpandCollapse'
import FilterDropdown from './FilterDropdown'

const SortBy = () => {

    const { title, setTitle } = useContext(SearchContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const onClickOpenCloseDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    useEffect(() => {
        setIsDropdownOpen(false)
    }, [title])

    return (
        <li className="filter-btn__container">
            <span className="filter-btn__label">מיין לפי</span>
            <button type="button" className="filter-btn">
                <span>{title}</span>
                <ExpandCollapse />
                <div onClick={onClickOpenCloseDropdown} name="button-ol" className="filter-btn__overlay" />
                {isDropdownOpen && <FilterDropdown setTitle={setTitle} title={title} />}
            </button>
        </li>
    )
}

export default SortBy