import React, { useContext } from 'react'
import { SearchContext } from '../../../context/SearchContext'
import PostsContainer from './post/PostsContainer'
import SearchFilters from './SearchFilters'

const Posts = () => {

    const { numOfListings } = useContext(SearchContext)

    return (

        <div className="main-area__container">
            <div className="main-area-header__container">
                <h2>נדל"ן להשכרה</h2>
                <span>מציג {numOfListings} מודעות</span>
            </div>
            <SearchFilters />
            <PostsContainer />
        </div>
    )
}

export default Posts