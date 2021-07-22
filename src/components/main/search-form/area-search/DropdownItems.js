import React, { useContext } from 'react'
import { SearchContext } from '../../../../context/SearchContext'


const DropdownItems = ({ close, name, info, areaInput }) => {

    const { setAreaSearch } = useContext(SearchContext)

    const cities = new Set([...info.filter((res) => res[0].includes(areaInput)).map(res => res[0])])
    const streets = new Set([...info.filter((res) => res[0].trim() !== res[1].trim())].map(res => `${res[1]}, ${res[0]}`))

    const selectArea = (e) => {
        setAreaSearch(e.target.title)
        close()
    }


    return (
        info.length > 0 &&
        <>
            <li className="search-area-dropdown__title">{name}</li>
            {name === 'עיר' && [...cities].map(n => <li className="search-area-dropdown__item" key={n}><span>{n}</span> <span className="area-type">{name}</span> <div className="area-search__overlay" onClick={selectArea} title={n} /></li>)}
            {name === 'רחוב' && [...streets].map(n => <li className="search-area-dropdown__item" key={n}><span>{n}</span> <span className="area-type">{name}</span> <div className="area-search__overlay" onClick={selectArea} title={n} /></li>)}

        </>
    )
}

export default DropdownItems