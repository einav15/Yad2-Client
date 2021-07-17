import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Yad2Context } from '../../../../context/Yad2Context'
import Post from './Post'
import PostTablet from './PostTablet'
import { dbUrl } from '../../../../context/LoginContext'
import { SearchContext } from '../../../../context/SearchContext';



const PostsContainer = ({ setNumOfListings }) => {

    const { screenWidth } = useContext(Yad2Context)
    const { listings, setListings } = useContext(SearchContext)
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        let flag = true
        const getFirstPosts = async () => {
            await Axios.get(`${dbUrl}listings`)
                .then(res => {
                    setListings(res.data.data)
                    setNumOfListings(res.data.length)
                })
                .catch(e => console.log(e))
        }
        if (flag)
            getFirstPosts()
        return flag = false
    }, [])

    useLayoutEffect(() => {
        window.addEventListener('scroll', (e) => {
            const win = e.target.scrollingElement
            setIsScrolledToBottom(win.scrollHeight - win.scrollTop === win.clientHeight)
        })
    }, [])

    useEffect(() => {
        const getMorePosts = async () => {
            await Axios.get(`${dbUrl}listings`, {
                params: {
                    last: listings[listings.length - 1]
                }
            })
                .then(res => setListings([...listings.concat(res.data.data)]))
                .then(() => setIsLoading(false))
        }
        if (isScrolledToBottom) {
            setIsLoading(true)
            getMorePosts()
        }
    }, [isScrolledToBottom])

    return (
        <div className={(screenWidth > 800 ? "" : "mobile-") + "posts__container"}>
            {listings.map((listing) =>
                screenWidth > 960 ?
                    <Post key={Math.random()} post={listing} /> :
                    <PostTablet key={Math.random()} post={listing} />
            )}
            {isLoading && <div className="loading-spinner__container">
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={16}
                    width={16}
                />

            </div>}
        </div>
    )
}

export default PostsContainer