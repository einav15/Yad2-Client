import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../../context/SearchContext'
import FilterDropdownRadio from './FilterDropdownRadio'

const FilterDropdown = ({ setTitle, title }) => {

    const [value, setValue] = useState(title)
    const { listings, setListings } = useContext(SearchContext)

    useEffect(() => {
        setTitle(value)
    }, [value, setTitle])

    useEffect(() => {
        if (title === "מחיר - מהזול ליקר")
            setListings([...listings].sort((a, b) => a.payments.price - b.payments.price))
        else if (title === "מחיר - מהיקר לזול")
            setListings([...listings].sort((a, b) => b.payments.price - a.payments.price))
        else {
            setListings([...listings].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)))
        }
    }, [title])

    return (
        <div className="search-filters__dropdown">
            <FilterDropdownRadio name="לפי תאריך" value={value} setValue={setValue} />
            <FilterDropdownRadio name="מחיר - מהזול ליקר" value={value} setValue={setValue} />
            <FilterDropdownRadio name="מחיר - מהיקר לזול" value={value} setValue={setValue} />
        </div>
    )
}

export default FilterDropdown