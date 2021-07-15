import React from 'react'
import PostMainMoreInfo from './PostMainMoreInfo'
import PostMainProperties from './PostMainProperties'

const PostMainArea = ({ post }) => {
    const { address, propertyInfo, payments } = post


    return (
        <div onClick={e => e.stopPropagation()} className="post-main-area__info">
            <h3>תיאור הנכס</h3>
            <div>{propertyInfo.freeText}</div>
            <PostMainMoreInfo propertyInfo={propertyInfo} payments={payments} address={address} />
            <PostMainProperties propertyInfo={propertyInfo} />
        </div>
    )
}

export default PostMainArea