import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { LoginContext } from '../../context/LoginContext'
import { Yad2Context, icons } from '../../context/Yad2Context'
import MainMenuLeft from './main-menu/MainMenuLeft'
import MainMenuRight from './main-menu/MainMenuRight'
import NewPostHeader from './main-menu/NewPostHeader'
import NavMenu from './nav-menu/NavMenu'


const Header = () => {
    const { isNewPostPage, setIsNewPostPage, dispatchNewPost, screenWidth, location } = useContext(Yad2Context)
    const { user } = useContext(LoginContext)
    const history = useHistory()

    const exitNewPostPage = () => {
        setIsNewPostPage(false)
        dispatchNewPost({ type: "RESET" })
        history.push('/')
    }

    useEffect(() => {
        if (location === '/new-post')
            setIsNewPostPage(true)
        else
            setIsNewPostPage(false)
    }, [location, setIsNewPostPage])

    return (
        !isNewPostPage ?
            <header>
                <div id="main-menu">
                    <MainMenuRight />
                    <MainMenuLeft />
                </div>
                <NavMenu />
            </header>
            :
            <NewPostHeader
                user={user}
                screenWidth={screenWidth}
                icons={icons}
                exitNewPostPage={exitNewPostPage} />
    )

}


export default Header