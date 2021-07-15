import React, { useState } from 'react'
import menuData from '../../../../data/main-menu.json'


const NavListItem = ({ itemName, last }) => {
    const [isOpen, setIsOpen] = useState(false)
    let dropdownData = menuData.filter((d) => d.name === itemName)[0]
    let className = "navigation-section__items"
    if (dropdownData == null) {
        dropdownData = {
            name: itemName
        }
        if (last) className += " last"
    } else {
        if (dropdownData.links)
            if (dropdownData.links[0] && dropdownData.links[1]) {
                const connect = [...dropdownData.links[0], ...dropdownData.links[1]]
                dropdownData = {
                    name: itemName,
                    links: connect
                }
            } else {
                dropdownData = {
                    name: itemName,
                    links: dropdownData.links[0]
                }
            }

    }


    const onClickOpenClose = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <div onClick={onClickOpenClose} key={dropdownData.name} className={className}>
                <span>{dropdownData.name}</span>
                {dropdownData.links && !isOpen && <img alt="expand" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />}
                {dropdownData.links && isOpen && <img alt="collapse" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xNi43MTQsMTEuMjk3Yy0wLjM4OS0wLjM4OS0xLjAzOS0wLjM4OS0xLjQyOSwwbC04Ljk5OSw4Ljk3NiAgYy0wLjM5NCwwLjM5NC0wLjM5NCwxLjAzMywwLDEuNDI2YzAuMzk0LDAuMzk0LDEuMDM0LDAuMzk0LDEuNDI4LDBMMTYsMTMuNDM2bDguMjg1LDguMjY0YzAuMzk1LDAuMzk0LDEuMDM0LDAuMzk0LDEuNDI5LDAgIGMwLjM5NC0wLjM5NCwwLjM5NC0xLjAzMywwLTEuNDI2TDE2LjcxNCwxMS4yOTd6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX0xlc3MiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />}
            </div>
            {isOpen && dropdownData.links.map((link) =>
                <div className="spread-links" key={link.name}><span>{link.name}</span></div>)}
        </>
    )
}


export default NavListItem