import React, { useContext, useEffect, useState } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'
import ExpandCollapse from '../ExpandCollapse'
import NumOfRoomsDropdown from './NumOfRoomsDropdown'
import NumOfRoomsSelect from './NumOfRoomsSelect'

const RoomsDropdown = ({ setIsDropdownOpen, setRooms, numOfRooms }) => {

    const [isDropdownOpenFrom, setIsDropdownOpenFrom] = useState(false)
    const [isDropdownOpenTo, setIsDropdownOpenTo] = useState(false)
    const [amountFrom, setAmountFrom] = useState(numOfRooms[0])
    const [amountTo, setAmountTo] = useState(numOfRooms[1])

    const { screenWidth } = useContext(Yad2Context)


    const onClickFrom = () => {
        setIsDropdownOpenFrom(!isDropdownOpenFrom)
        setIsDropdownOpenTo(false)
    }
    const onClickTo = () => {
        setIsDropdownOpenTo(!isDropdownOpenTo)
        setIsDropdownOpenFrom(false)
    }

    const chooseRoomAmountFrom = (num) => {
        setAmountFrom((Number)(num))
    }

    const chooseRoomAmountTo = (num) => {
        setAmountTo((Number)(num))
    }

    useEffect(() => {
        setRooms([amountFrom, amountTo])
    }, [amountFrom, amountTo])

    return (
        <>
            <div className="search-dropdown">
                {screenWidth > 630 ?
                    <div className="rooms-amount-btns__container">

                        <button type="button" onClick={onClickFrom} className="search-dropdown__btn rooms-amounts">
                            <span className={amountFrom > 0 ? "black-text-color" : ""}>{amountFrom === 0 ? "מ-" : amountFrom}</span><ExpandCollapse isDropdownOpen={isDropdownOpenFrom} />
                            {isDropdownOpenFrom && <NumOfRoomsDropdown setAmount={chooseRoomAmountFrom} />}
                        </button>
                        <button type="button" onClick={onClickTo} className="search-dropdown__btn rooms-amounts">
                            <span className={amountTo > 0 ? "black-text-color" : ""}>{amountTo === 0 ? "עד-" : amountTo} </span><ExpandCollapse isDropdownOpen={isDropdownOpenTo} />
                            {isDropdownOpenTo && <NumOfRoomsDropdown setAmount={chooseRoomAmountTo} amountFrom={amountFrom} to={true} />}
                        </button>
                    </div> :
                    <NumOfRoomsSelect setFrom={chooseRoomAmountFrom} setTo={chooseRoomAmountTo} amountFrom={amountFrom} amountTo={amountTo} />
                }
            </div>
        </>
    )
}

export default RoomsDropdown