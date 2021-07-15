import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../../../context/SearchContext'

import CheckBoxes from './CheckBoxes'

const AssetTypeLists = ({ type, listItems, setSectionChecked }) => {

    const { assetTypes, selectAll, setSelectAll, deselectAll, selectedTypes, setSelectedTypes } = useContext(SearchContext)

    const initCheckedBoxesState = () => {
        const ret = {}
        listItems.forEach(item => {
            ret[item] = assetTypes[item] ? true : false
        })
        return ret
    }


    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [checkedBoxes, setCheckedBoxes] = useState(initCheckedBoxesState())
    const [amountOfItems, setAmountOfItems] = useState(0)
    const [allChecked, setAllChecked] = useState(false)



    const onClickOpen = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const checkBox = (e) => {
        const box = e.target.parentNode.children[0]
        box.checked = !box.checked
        setCheckedBoxes(checkedBoxes => ({ ...checkedBoxes, [box.name]: box.checked }))
    }

    const checkAllBoxes = (e) => {
        const box = e.target.parentNode.children[0]
        box.checked = !box.checked
        listItems.forEach(item => {
            setCheckedBoxes(checkedBoxes => ({ ...checkedBoxes, [item]: box.checked }))
        })
    }

    const onChange = () => { }

    const areAllChecked = useCallback(() => {
        let counter = 0
        let ret = true
        listItems.forEach(item => {
            if (!checkedBoxes[item])
                ret = false
            else
                counter++
        })
        setAllChecked(ret)
        setAmountOfItems(counter)
        setSectionChecked(counter)
        if (!ret)
            setSelectAll(false)
    })

    useEffect(() => {
        const merge = { ...selectedTypes, ...checkedBoxes }
        setSelectedTypes(merge)
        areAllChecked()
    }, [checkedBoxes])


    useEffect(() => {
        if (selectAll) {
            listItems.forEach(item => {
                setCheckedBoxes(checkedBoxes => ({ ...checkedBoxes, [item]: true }))
            })
            setAllChecked(true)
        } else
            setSelectAll(false)
    }, [selectAll])

    const uncheckAllBoxes = () => {
        setCheckedBoxes({})
    }

    useEffect(() => {
        if (deselectAll)
            uncheckAllBoxes()
    }, [deselectAll])

    return (
        <>
            <li key={type} className="asset-types-list__title" >
                <div onClick={checkAllBoxes}>
                    <input checked={allChecked} onChange={onChange} type="checkbox" />
                    <span >{type} {amountOfItems > 0 && <span className="boxes-amount-text">נבחרו {amountOfItems} סוגים</span>}</span>
                    <div className="overlay ol-type" />
                </div>
                {!isDropdownOpen && <img onClick={onClickOpen} alt="expand" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />}
                {isDropdownOpen && <img onClick={onClickOpen} alt="collapse" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xNi43MTQsMTEuMjk3Yy0wLjM4OS0wLjM4OS0xLjAzOS0wLjM4OS0xLjQyOSwwbC04Ljk5OSw4Ljk3NiAgYy0wLjM5NCwwLjM5NC0wLjM5NCwxLjAzMywwLDEuNDI2YzAuMzk0LDAuMzk0LDEuMDM0LDAuMzk0LDEuNDI4LDBMMTYsMTMuNDM2bDguMjg1LDguMjY0YzAuMzk1LDAuMzk0LDEuMDM0LDAuMzk0LDEuNDI5LDAgIGMwLjM5NC0wLjM5NCwwLjM5NC0xLjAzMywwLTEuNDI2TDE2LjcxNCwxMS4yOTd6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX0xlc3MiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />}
            </li>
            {isDropdownOpen && <ul className="dropdown-assets">
                {listItems.map(item => (
                    <CheckBoxes key={item + "Cbox"} checkedBoxes={checkedBoxes} name={item} checkBox={checkBox} />
                )
                )}
            </ul>}
        </>
    )

}

export default AssetTypeLists