import React, { useContext } from 'react'
import ListItem from './ListItem'
import { Yad2Context } from '../../../context/Yad2Context'
import SlidingMenuButton from './sliding-menu/SlidingMenuButton'


const MainMenuRight = () => {
    const { screenWidth } = useContext(Yad2Context)

    return (
        <div className="main-menu__list">
            <img id="logo" alt="logo" src={screenWidth < 631 ? "https://i.ibb.co/fvK1SV0/1.png" : "https://assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png"} />
            {screenWidth >= 1310 &&
                <ul>
                    <ListItem key='נדל"ן' itemName='נדל"ן' />
                    <ListItem key="רכב" itemName="רכב" />
                    <ListItem key='יד שנייה' itemName='יד שנייה' />
                    <ListItem key="דרושים IL" itemName="דרושים IL" />
                    <ListItem key='עסקים ומסחרי' itemName='עסקים ומסחרי' />
                    <ListItem key="חיות מחמד" itemName="חיות מחמד" />
                    <ListItem key='בעלי מקצוע' itemName='בעלי מקצוע' />
                    <ListItem key="עוד..." itemName="עוד..." />
                </ul>}
            {screenWidth < 1310 && <SlidingMenuButton />}
        </div>
    )
}


export default MainMenuRight