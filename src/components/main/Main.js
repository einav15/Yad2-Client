import React, { useContext, useEffect } from 'react'
import { Yad2Context } from '../../context/Yad2Context'
import Accessibility from './Accessibility'
import Posts from './posts/Posts'
import SearchForm from './search-form/SearchForm'

const Main = () => {

    const { setLocation } = useContext(Yad2Context)

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [setLocation])

    return (
        <div id="main">
            <Accessibility />
            <img src="https://tpc.googlesyndication.com/simgad/9205463189626147643" alt="ad" id="image-ad" />
            <SearchForm />
            <Posts />
        </div>
    )
}

export default Main