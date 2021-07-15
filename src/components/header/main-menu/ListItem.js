import React, { useState } from 'react'
import menuData from '../../../data/main-menu.json'


const ListItem = ({ itemName }) => {
    const [isHover, setIsHover] = useState(false)

    const dropdownData = menuData.filter((d) => d.name === itemName)[0]

    const onMouseHover = () => {
        setIsHover(true)
    }

    const offMouseHover = () => {
        setIsHover(false)

    }

    const nadlan = itemName === 'נדל"ן' ? { background: "#eeeeee" } : {}

    return (
        <li style={nadlan} onMouseLeave={offMouseHover} onMouseEnter={onMouseHover}>
            {itemName}
            {isHover && <div id={itemName} className="dropdown dropdown-menu">
                <div className="dropdown-column right-col">
                    {dropdownData.links[0].map(link => (
                        <p key={link.name}>
                            {link.name}
                        </p>
                    ))}
                </div>
                {dropdownData.links[1] &&
                    <div className="dropdown-column">
                        {dropdownData.links[1].map(link => (
                            <p key={link.name}>
                                {link.icon && <img className="icon" key={link.icon} alt={link.name} src={link.icon} />}
                                {link.name}
                            </p>
                        ))}
                    </div>
                }
            </div>}
        </li>
    )
}


export default ListItem