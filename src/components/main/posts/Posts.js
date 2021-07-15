import React from 'react'
import PostsContainer from './post/PostsContainer'
import SearchFilters from './SearchFilters'

const Posts = () => {

    return (

        <div className="main-area__container">
            <div className="main-area-header__container">
                <h2>נדל"ן להשכרה</h2>
                <span>מציג {""} מודעות</span>
            </div>
            <SearchFilters />
            <PostsContainer />
        </div>
    )
}

export default Posts