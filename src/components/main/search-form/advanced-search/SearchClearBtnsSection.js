import React, { useContext } from 'react'
import { SearchContext } from '../../../../context/SearchContext'

const SearchClearBtnsSection = () => {

    const { dispatchAdvancedSearchOptions } = useContext(SearchContext)

    const onClickClear = () => {
        dispatchAdvancedSearchOptions({ type: "CLEAR" })
    }

    return (
        <div className="advanced-search__search-btn-section">
            <button className="search-btn">חיפוש <span className="overlay-search-btn" /></button>
            <button type="button" className="clear-btn" onClick={onClickClear}>נקה</button>
        </div>
    )
}

export default SearchClearBtnsSection