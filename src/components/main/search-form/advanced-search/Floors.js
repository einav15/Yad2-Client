import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../../../context/SearchContext'
import ExpandCollapse from '../ExpandCollapse'
import FloorDropdown from './FloorDropdown'

const Floors = () => {

    const { advancedSearchOptions, dispatchAdvancedSearchOptions } = useContext(SearchContext)

    const [isDropdownFromOpen, setIsDropdownFromOpen] = useState(false)
    const [isDropdownToOpen, setIsDropdownToOpen] = useState(false)

    const openCloseFromDropdown = (e) => {
        if (e.target.src)
            setIsDropdownFromOpen(!isDropdownFromOpen)
    }

    const openCloseToDropdown = (e) => {
        if (e.target.src)
            setIsDropdownToOpen(!isDropdownToOpen)
    }

    const setLowestFloorLimit = (floor) => {
        const floors = { ...advancedSearchOptions.floors }
        floors[0] = floor
        if (floors[1] > -1 && floors[1] < floor)
            floors[1] = floor
        dispatchAdvancedSearchOptions({ type: "CHANGE_FLOORS", floors })

    }

    const setHighestFloorLimit = (floor) => {
        const floors = { ...advancedSearchOptions.floors }
        floors[1] = floor
        dispatchAdvancedSearchOptions({ type: "CHANGE_FLOORS", floors })

    }


    return (
        <li>
            <span>קומה</span>
            <div>
                <span onClick={openCloseFromDropdown} className="advanced-search__floor" >
                    <input
                        onBlur={() => setTimeout(() => { setIsDropdownFromOpen(false) }, 250)}
                        onFocus={() => setIsDropdownFromOpen(true)}
                        placeholder="מ-"
                        onChange={() => { }}
                        value={advancedSearchOptions.floors[0] > -2 ? (advancedSearchOptions.floors[0] === -1 ? "מרתף/פרטר" : advancedSearchOptions.floors[0]) : ""}
                    />
                    <ExpandCollapse isDropdownOpen={isDropdownFromOpen} />
                    {isDropdownFromOpen && <FloorDropdown setFloor={setLowestFloorLimit} />}
                </span>
                <span onClick={openCloseToDropdown} className="advanced-search__floor" >
                    <input
                        onBlur={() => setTimeout(() => setIsDropdownToOpen(false), 250)}
                        onFocus={() => setIsDropdownToOpen(true)}
                        placeholder="עד-"
                        onChange={() => { }}
                        value={advancedSearchOptions.floors[1] > -2 ? (advancedSearchOptions.floors[1] === -1 ? "מרתף/פרטר" : advancedSearchOptions.floors[1] !== 13 ? advancedSearchOptions.floors[1] : "") : ""}
                    />
                    <ExpandCollapse isDropdownOpen={isDropdownToOpen} />
                    {isDropdownToOpen && <FloorDropdown setFloor={setHighestFloorLimit} to={true} minimum={advancedSearchOptions.floors[0]} />}
                </span>
            </div>
        </li>
    )
}

export default Floors