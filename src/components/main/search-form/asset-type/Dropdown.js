import React, { useEffect, useContext, useState } from 'react'
import { SearchContext } from '../../../../context/SearchContext'
import AssetTypeLists from './AssetTypeLists'

const Dropdown = ({ setIsDropdownOpen, checked, setChecked }) => {

    const {
        selectAll, setSelectAll, deselectAll, setDeselectAll,
        selectedTypes, setAssetTypes,
    } = useContext(SearchContext)

    const [dirotChecked, setDirotChecked] = useState(0)
    const [housesChecked, setHousesChecked] = useState(0)
    const [othersChecked, setOthersChecked] = useState(0)

    const listItems = [
        ["דירה", "דירת גן", "גג/פנטהאוז", "דופלקס", "דירת נופש", "מרתף/פרטר", "טריפלקס", "יחידת דיור", "החלפת דירות", "סאבלט", "סטודיו/לופט"],
        ["בית פרטי/קוטג", "דו משפחתי", "משק חקלאי/נחלה", "משק עזר"],
        ["מגרשים", "דיור מוגן", "בניין מגורים", "מחסן", "חניה", "קב' רכישה / זכות לנכס", "כללי"]
    ]

    const selectDeselctAll = () => {
        if (selectAll) {
            setDeselectAll(true)
            setSelectAll(false)
        } else
            setSelectAll(true)
    }

    const onChange = () => { }

    useEffect(() => {
        setDeselectAll(false)
    }, [deselectAll, setDeselectAll])

    const saveSelection = () => {
        setAssetTypes(selectedTypes)
        setIsDropdownOpen(false)
    }

    useEffect(() => {
        setChecked(dirotChecked + housesChecked + othersChecked)
    }, [setChecked, dirotChecked, housesChecked, othersChecked])


    return (
        <div className="search-dropdown">
            <ul className="asset-types-list">
                <li className="asset-types-list__main-title">
                    <div>
                        <input onChange={onChange} checked={checked} type="checkbox" />
                        <span>כל סוגי הנכסים</span>
                        <div className="overlay ol-type" onClick={selectDeselctAll} />
                    </div>
                </li>
                <AssetTypeLists type="דירות" listItems={listItems[0]} setSectionChecked={setDirotChecked} />
                <AssetTypeLists type="בתים" listItems={listItems[1]} setSectionChecked={setHousesChecked} />
                <AssetTypeLists type="סוגים נוספים" listItems={listItems[2]} setSectionChecked={setOthersChecked} />
                <li className="drop-footer">
                    <button onClick={saveSelection} className="drop-footer__btn">בחירה</button>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown