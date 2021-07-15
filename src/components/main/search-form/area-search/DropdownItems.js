import React from 'react'

const DropdownItems = ({ name, info }) => {
    return (
        info.length > 0 &&
        <>
            <li className="search-area-dropdown__title">{name}</li>
            {info.map(n => <li className="search-area-dropdown__item" key={n}><span>{n}</span> <span className="area-type">{name}</span></li>)}
        </>
    )
}

export default DropdownItems