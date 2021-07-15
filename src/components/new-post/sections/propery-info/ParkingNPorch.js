import React from 'react'
import RadioBtns from './RadioBtns'

const ParkingNPorch = () => {

    return (
        <>
            <div className="input__container">
                <label>חנייה</label>
                <RadioBtns type="parking" />
            </div>
            <div className="input__container">
                <label>מרפסת</label>
                <RadioBtns type="porch" />
            </div>
        </>
    )
}

export default ParkingNPorch