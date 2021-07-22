import React, { useLayoutEffect, useReducer, useState } from 'react'
import NewPostReducer from '../reducers/NewPostReducer';
import { newPostInitialState } from '../utilities';
export const Yad2Context = React.createContext()

const Yad2ContextProvider = (props) => {
    //states and reducers
    const [screenWidth, setScreenWidth] = useState(0);
    const [isBackdrop, setIsBackdrop] = useState(false)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [isNewPostPage, setIsNewPostPage] = useState(false)
    const [newPost, dispatchNewPost] = useReducer(NewPostReducer, { ...newPostInitialState })
    const [location, setLocation] = useState(window.location.pathname)
    const [isNewPostBtn, setIsNewPostBtn] = useState(false)


    useLayoutEffect(() => {
        const updateSize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
    }, []);


    return (
        <Yad2Context.Provider value={{
            //states and reducers to pass
            screenWidth,
            isBackdrop, setIsBackdrop,
            isLoginModalOpen, setIsLoginModalOpen,
            isNewPostPage, setIsNewPostPage,
            newPost, dispatchNewPost,
            location, setLocation,
            isNewPostBtn, setIsNewPostBtn
        }}>
            {props.children}
        </Yad2Context.Provider>
    )
}



export default Yad2ContextProvider

