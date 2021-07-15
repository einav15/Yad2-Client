import React, { useContext } from 'react'
import { SearchContext } from '../../../../context/SearchContext'

const SearchClearBtnsSection = () => {

    const { dispatchAdvancedSearchOptions } = useContext(SearchContext)

    const onClickClear = () => {
        dispatchAdvancedSearchOptions({ type: "CLEAR" })
    }

    const onClickSearch = () => {
    }

    return (
        <div className="advanced-search__search-btn-section">
            <button onClick={onClickSearch} className="search-btn">חיפוש <span className="overlay-search-btn" /></button>
            <button className="clear-btn" onClick={onClickClear}>נקה</button>
        </div>
    )
}

export default SearchClearBtnsSection