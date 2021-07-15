import React from 'react'
import NextLastBtns from '../../NextLastBtns'
import MoreInfo from './MoreInfo'
import NumOfRooms from './NumOfRooms'
import ParkingNPorch from './ParkingNPorch'
import ProperyProperties from './PropertyProperties'

const PropertyInfo = ({ next, goBackToLastSection }) => {

    const onSubmitForm = (e) => {
        e.preventDefault()
        next(true)
    }


    return (
        <form onSubmit={onSubmitForm} className="propery-info">
            <NumOfRooms />
            <ParkingNPorch />
            <ProperyProperties />
            <MoreInfo />
            <NextLastBtns enableSubmit={true} goBackToLastSection={goBackToLastSection} lastSection={2} />

        </form>
    )
}

export default PropertyInfo