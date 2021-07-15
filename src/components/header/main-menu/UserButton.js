import React, { useContext, useState } from 'react'
import { Yad2Context, icons } from '../../../context/Yad2Context'
import { LoginContext } from '../../../context/LoginContext'

const UserButton = ({ openLoginModal }) => {

    const { screenWidth } = useContext(Yad2Context)
    const { user, dispatchUser } = useContext(LoginContext)
    const [isHoverUserBtn, setIsHoverUserBtn] = useState(false)

    const onHoverUserBtn = () => {
        setIsHoverUserBtn(true)
    }

    const offHoverUserBtn = () => {
        setIsHoverUserBtn(false)
    }

    const onClickOpenModal = () => {
        if (!user) openLoginModal()
    }

    return (
        screenWidth > 865 && <li onClick={onClickOpenModal} onMouseEnter={onHoverUserBtn} onMouseLeave={offHoverUserBtn}>
            {!user ? <>
                <img alt="user" className="icons" src={icons.user} />
                {screenWidth > 1625 && <span>התחברות</span>}
            </> : <>
                <div className="user-icon">{user.user.firstName[0]}</div>
                {screenWidth > 1625 && <span>{user.user.firstName}</span>}
            </>
            }
            {isHoverUserBtn && <div className="dropdown user">
                {user && <div className="dropdown__item">
                    <img alt="user" src={icons.user} />
                    <p>איזור אישי</p>
                </div>}
                <div className="dropdown__item">
                    <img alt="opposite arrows" src={icons.oppositeArrows} />
                    <p>השוואת רכבים</p>
                </div>
                <div className="dropdown__item">
                    <img alt="last" id="last-searches" src={icons.lastSearches.back} />
                    <img alt="last" id="last-searches-v" src={icons.lastSearches.v} />
                    <p>חיפושים אחרונים</p>
                </div>
                {user && <div onClick={() => dispatchUser({ type: "LOGOUT" })} className="dropdown__item">
                    <img alt="logout" src={icons.logout} />
                    <p>התנתקות</p>
                </div>
                }
            </div>
            }
        </li>
    )
}

export default UserButton