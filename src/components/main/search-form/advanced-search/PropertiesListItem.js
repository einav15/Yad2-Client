import React, { useContext } from 'react'
import { SearchContext } from '../../../../context/SearchContext'

const PropertiesSection = ({ name, checkCurrentBox }) => {

    const { advancedSearchOptions, dispatchAdvancedSearchOptions } = useContext(SearchContext)

    const onClickCheckBox = () => {
        dispatchAdvancedSearchOptions({ type: "CHANGE_CHECKBOXES", box: name })
    }


    return (
        <li className="properties-list__item">
            <input onChange={() => { }} checked={advancedSearchOptions.checkBoxes ? advancedSearchOptions.checkBoxes[name] : false} type="checkbox" />
            <span>{name}</span>
            <div onClick={onClickCheckBox} className="properties-list__item-overlay" />
        </li>
    )
}

export default PropertiesSection