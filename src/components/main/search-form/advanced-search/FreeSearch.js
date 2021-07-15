import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../../../context/SearchContext'

const FreeSearch = () => {
    const { dispatchAdvancedSearchOptions } = useContext(SearchContext)
    const [freeText, setFreeText] = useState('')

    const onChangeFreeText = (e) => {
        setFreeText(e.target.value)
    }

    useEffect(() => {
        dispatchAdvancedSearchOptions({ type: "CHANGE_FREE_TEXT", freeText })
    }, [freeText, dispatchAdvancedSearchOptions])

    return (
        <div className="advanced-search__section free-search-section">
            <ul>
                <li>
                    <span>חיפוש חופשי</span>
                    <input value={freeText} onChange={onChangeFreeText} />
                </li>
                <li>
                    <img alt="קיבוצים ומושבים" src="https://i.ibb.co/mFDYJ6r/Screenshot-20210628-094208.png" />
                </li>
            </ul>
        </div>
    )
}

export default FreeSearch