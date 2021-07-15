import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../../../context/SearchContext'

const AptSize = () => {
    const { advancedSearchOptions, dispatchAdvancedSearchOptions } = useContext(SearchContext)
    const [minSize, setMinSize] = useState(advancedSearchOptions.size[0])
    const [maxSize, setMaxSize] = useState(advancedSearchOptions.size[1])

    const onChangeMaxSize = (e) => {
        const size = e.target.value
        if ((Number)(size) > 0)
            setMaxSize(size)
        else
            setMaxSize(-1)
    }

    const onChangeMinSize = (e) => {
        const size = e.target.value
        if ((Number)(size) > 0)
            setMinSize(size)
        else
            setMinSize(-1)
    }

    useEffect(() => {
        setMinSize(advancedSearchOptions.size[0])
        setMaxSize(advancedSearchOptions.size[1])
    }, [advancedSearchOptions, setMaxSize, setMinSize])

    useEffect(() => {
        dispatchAdvancedSearchOptions({ type: "CHANGE_SIZE", size: [minSize, maxSize] })
    }, [minSize, maxSize, dispatchAdvancedSearchOptions])


    return (
        <li>
            <span>גודל דירה (במ"ר)</span>
            <div>
                <span className="advanced-search__floor" >
                    <input
                        placeholder="מ-"
                        onChange={onChangeMinSize}
                        value={minSize === -1 ? '' : minSize}
                    />
                </span>
                <span className="advanced-search__floor" >
                    <input
                        placeholder="עד-"
                        onChange={onChangeMaxSize}
                        value={maxSize === -1 ? '' : maxSize}
                    />
                </span>
            </div>
        </li>
    )
}

export default AptSize