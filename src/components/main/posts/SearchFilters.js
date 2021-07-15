import React from 'react'
import OtherFilterBtns from './OtherFilterBtns'
import SortBy from './SortBy'

const SearchFilters = () => {

    return (
        <div className="main-area__search-filters">
            <ul>
                <SortBy />
                <OtherFilterBtns />
            </ul>
        </div>
    )
}

export default SearchFilters