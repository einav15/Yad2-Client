import React, { useEffect, useState } from 'react'
import FilterDropdownRadio from './FilterDropdownRadio'

const FilterDropdown = ({ setTitle, title }) => {

    const [value, setValue] = useState(title)

    useEffect(() => {
        setTitle(value)
    }, [value, setTitle])

    return (
        <div className="search-filters__dropdown">
            <FilterDropdownRadio name="לפי תאריך" value={value} setValue={setValue} />
            <FilterDropdownRadio name="מחיר - מהזול ליקר" value={value} setValue={setValue} />
            <FilterDropdownRadio name="מחיר - מהיקר לזול" value={value} setValue={setValue} />

        </div>
    )
}

export default FilterDropdown