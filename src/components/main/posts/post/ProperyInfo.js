import React from 'react'

const PropertyInfo = ({ address, propertyInfo, payments }) => {

    return (
        <div className="property-info">
            <div className="property-info__div">
                <b>{propertyInfo.numOfRooms["$numberInt"]}</b>
                <span>חדרים</span>
            </div>
            <div className="property-info__div">
                <b>{address.floorNum}</b>
                <span>קומה</span>
            </div>
            <div className="property-info__div">
                <b>{payments.actualSize["$numberInt"]}</b>
                <span>מ"ר</span>
            </div>
        </div>
    )
}

export default PropertyInfo