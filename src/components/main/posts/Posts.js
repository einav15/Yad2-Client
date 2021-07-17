import React, { useState } from 'react'
import PostsContainer from './post/PostsContainer'
import SearchFilters from './SearchFilters'

const Posts = () => {

    const [numOfListings, setNumOfListings] = useState(0)

    return (

        <div className="main-area__container">
            <div className="main-area-header__container">
                <h2>נדל"ן להשכרה</h2>
                <span>מציג {numOfListings} מודעות</span>
            </div>
            <SearchFilters />
            <PostsContainer setNumOfListings={setNumOfListings} />
        </div>
    )
}

export default Posts