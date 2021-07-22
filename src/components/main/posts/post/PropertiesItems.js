import React from 'react'
import { icons } from '../../../../utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import propertiesIcons from '../../../../data/propertiesIcons.json'


const PropertiesItems = ({ name, enabled }) => {


    return (
        <div className={"properties__container " + (enabled ? "" : "property-disabled")}>
            <FontAwesomeIcon icon={icons[propertiesIcons[name]]} />
            <span>{name}</span>
        </div>
    )
}

export default PropertiesItems