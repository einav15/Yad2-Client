import React, { useCallback, useContext, useEffect } from 'react'
import PropertiesSection from './PropertiesSection'
import { SearchContext } from '../../../../context/SearchContext'
import OtherFiltersSection from './OtherFiltersSection'
import FreeSearch from './FreeSearch'
import SearchClearBtnsSection from './SearchClearBtnsSection'

const AdvancedSearch = () => {

    const { advancedSearchOptions, setAdvancedSearchNumOfFilters } = useContext(SearchContext)

    const countCheckedBoxes = useCallback(() => {
        let counter = 0
        for (const box in advancedSearchOptions.checkBoxes)
            if (advancedSearchOptions.checkBoxes[box] === true)
                counter++
        return counter
    }, [advancedSearchOptions.checkBoxes])

    useEffect(() => {
        const numberOfCheckedBoxes = countCheckedBoxes()
        let counter = 0
        if (advancedSearchOptions.floors[0] !== -2 || advancedSearchOptions.floors[1] !== 13)
            counter++
        if (advancedSearchOptions.size[0] !== -1 || advancedSearchOptions.size[1] !== -1)
            counter++
        if (advancedSearchOptions.entryDate != null)
            counter++
        setAdvancedSearchNumOfFilters(numberOfCheckedBoxes + counter)

    }, [advancedSearchOptions, setAdvancedSearchNumOfFilters, countCheckedBoxes])


    return (
        <div className="advanced-search__container">
            <PropertiesSection />
            <OtherFiltersSection />
            <FreeSearch />
            <SearchClearBtnsSection />
        </div>
    )
}

export default AdvancedSearch
