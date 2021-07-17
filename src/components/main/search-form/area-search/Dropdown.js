import React, { useState } from 'react'
import DropdownItems from './DropdownItems'
import streetsSearch from '../../../../data/streetsGraph.json'

const Dropdown = ({ input }) => {

    const [streets, setStreets] = useState([])
    const [cities, setCities] = useState([])
    const [areas, setAreas] = useState([])

    return (
        <div className="search-dropdown">
            <ul className="search-area-dropdown__list">
                <li className="search-area-dropdown__main-title" >חפשו אזור, עיר, שכונה או רחוב </li>
                <DropdownItems name="רחוב" info={streets} />
                <DropdownItems name="עיר" info={cities} />
                <DropdownItems name="אזור" info={areas} />
            </ul>
        </div>
    )
}

export default Dropdown