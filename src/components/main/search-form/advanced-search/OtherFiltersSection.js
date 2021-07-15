import React from 'react'
import AptSize from './AptSize'
import EntryDate from './EntryDate'
import Floors from './Floors'


const OtherFiltersSection = () => {


    return (
        <div className="advanced-search__section others-section">
            <ul>
                <Floors />
                <AptSize />
                <EntryDate />
            </ul>
        </div>
    )
}

export default OtherFiltersSection