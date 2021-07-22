import React from 'react'
import DropdownItems from './DropdownItems'

const Dropdown = ({ setAreaInput, setAreaSearch, close, results, areaInput }) => {


    const deselectArea = () => {
        setAreaSearch('')
        setAreaInput('')
        close()
    }

    return (
        <>
            <div onClick={deselectArea} className="search__dropdown-overlay" />
            <div className="search-dropdown">
                <ul className="search-area-dropdown__list">
                    <li className="search-area-dropdown__main-title" >חפשו אזור, עיר, שכונה או רחוב </li>
                    <DropdownItems name="רחוב" close={close} info={results} areaInput={areaInput} />
                    <DropdownItems name="עיר" close={close} info={results} areaInput={areaInput} />
                </ul>
            </div>
        </>
    )
}

export default Dropdown