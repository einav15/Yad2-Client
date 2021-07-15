import React from 'react'
import NavListItem from './NavListItem'

const NavList = () => {

    return (
        <div className="navigation-section">
            <p>ניווט לפי קטגוריות</p>
            <NavListItem itemName='נדל"ן' />
            <NavListItem itemName='רכב' />
            <NavListItem itemName='יד שנייה' />
            <NavListItem itemName='דרושים IL' />
            <NavListItem itemName='עסקים ומסחרי' />
            <NavListItem itemName='חיות מחמד' />
            <NavListItem itemName='בעלי מקצוע' />
            <NavListItem itemName='תיירות ונופש' />
            <NavListItem itemName='לימודים' />
            <NavListItem itemName='מגזין יד2' last={true} />
        </div>
    )
}


export default NavList