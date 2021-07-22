import React, { useState } from 'react'
import ExpandCollapse from '../ExpandCollapse'
import RoomsDropdown from './RoomsDropdown'

const Rooms = ({ numOfRooms, setNumOfRooms }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const onClickOpen = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const setRooms = (range) => {
        setNumOfRooms(range)
    }


    return (
        <div className="form-input rooms-length">
            <span>חדרים</span>
            {isDropdownOpen && <div onClick={() => setIsDropdownOpen(false)} className="search__dropdown-overlay" />}
            <button type="button" onClick={onClickOpen} className="search-dropdown__btn rooms-btn">
                {
                    numOfRooms[0] === 0 && numOfRooms[1] === 0 ? <span>חדרים</span> :
                        (numOfRooms[0] === 0 ? `עד ${numOfRooms[1]}` :
                            (numOfRooms[1] === 0 ? `מ- ${numOfRooms[0]}` : `${numOfRooms[0]} - ${numOfRooms[1]}`))

                }
                <ExpandCollapse isDropdownOpen={isDropdownOpen} />
            </button>
            {isDropdownOpen && <RoomsDropdown setIsDropdownOpen={setIsDropdownOpen} setRooms={setRooms} numOfRooms={numOfRooms} />}
        </div>
    )
}

export default Rooms