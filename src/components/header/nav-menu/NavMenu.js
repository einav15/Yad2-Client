import React, { useContext } from 'react'
import { Yad2Context } from '../../../context/Yad2Context'

const NavMenu = () => {
    const { screenWidth } = useContext(Yad2Context)

    return (
        <>
            { (screenWidth < 631 || screenWidth > 960) &&
                <div id="nav-menu">
                    {screenWidth < 631 && <img id="menu-ad" alt="ad" src="https://i.ibb.co/xsfrkNq/2.png" />}
                    <div className="nav-menu__list">
                        {screenWidth > 630 &&
                            <ul>
                                <li><p> מכירה</p></li>
                                <li className="highlighted"><p className="offset">השכרה</p></li>
                                <li><p>דירות שותפים</p></li>
                                <li><p>נדל"ן מסחרי</p></li>
                            </ul>
                        }
                        {screenWidth < 631 &&
                            <div className="mobile-nav-menu">
                                <p>מכירה</p>
                                <p className="highlighted">השכרה</p>
                                <p>שותפים</p>
                                <p>מסחרי</p>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}


export default NavMenu