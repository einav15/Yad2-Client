import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../../../context/SearchContext'
import ExpandCollapse from '../ExpandCollapse'
import FloorDropdown from './FloorDropdown'

const Floors = () => {

    const { advancedSearchOptions, dispatchAdvancedSearchOptions } = useContext(SearchContext)

    const [isDropdownFromOpen, setIsDropdownFromOpen] = useState(false)
    const [isDropdownToOpen, setIsDropdownToOpen] = useState(false)

    const [lowestFloor, setLowestFloor] = useState(-2)
    const [highestFloor, setHighestFloor] = useState(13)

    const openCloseFromDropdown = (e) => {
        if (e.target.src)
            setIsDropdownFromOpen(!isDropdownFromOpen)
    }

    const openCloseToDropdown = (e) => {
        if (e.target.src)
            setIsDropdownToOpen(!isDropdownToOpen)
    }

    const setLowestFloorLimit = (floor) => {
        setLowestFloor(floor)
        if (highestFloor > -1 && highestFloor < floor)
            setHighestFloor(floor)
    }

    const setHighestFloorLimit = (floor) => {
        setHighestFloor(floor)
    }

    useEffect(() => {
        dispatchAdvancedSearchOptions({ type: "CHANGE_FLOORS", floors: [lowestFloor, highestFloor] })
    }, [lowestFloor, highestFloor, dispatchAdvancedSearchOptions])


    useEffect(() => {
        setLowestFloor(advancedSearchOptions.floors[0])
        setHighestFloor(advancedSearchOptions.floors[1])
    }, [advancedSearchOptions, setLowestFloor, setHighestFloor])


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
                        value={lowestFloor > -2 ? (lowestFloor === -1 ? "מרתף/פרטר" : lowestFloor) : ""}
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
                        value={highestFloor > -2 ? (highestFloor === -1 ? "מרתף/פרטר" : highestFloor !== 13 ? highestFloor : "") : ""}
                    />
                    <ExpandCollapse isDropdownOpen={isDropdownToOpen} />
                    {isDropdownToOpen && <FloorDropdown setFloor={setHighestFloorLimit} to={true} minimum={lowestFloor} />}
                </span>
            </div>
        </li>
    )
}

export default Floors