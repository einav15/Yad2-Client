import React from 'react'
import QuickNavItem from './QuickNavItem'


const SlidingMenuSearch = () => {

    return (
        <div className="search-section">
            <input placeholder="חיפוש מהיר באתר" />
            <QuickNavItem itemName='נדל"ן' />
            <QuickNavItem itemName='רכב' />
            <QuickNavItem itemName='יד שנייה' />
            <QuickNavItem itemName='עסקים ומסחרי' />
            <QuickNavItem itemName='דרושים IL' />
            <QuickNavItem itemName='חיות מחמד' />
            <QuickNavItem itemName='תיירות ונופש' />
            <QuickNavItem itemName='לימודים' />
        </div>
    )
}


export default SlidingMenuSearch