import React from 'react'
import menuData from '../../../../data/sliding-menu.json'


const QuickNavItem = ({ itemName }) => {
    const quickNavData = menuData.filter((d) => d.name === itemName)[0]

    return (
        <div className="sliding-menu-search__icon" key={itemName}>
            <img alt={itemName} src={quickNavData.icon} />
            <p>{itemName}</p>
        </div>
    )
}


export default QuickNavItem