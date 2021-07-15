import React, { useState } from 'react'
import PhoneBtn from './PhoneBtn'
import PostMainArea from './PostMainArea'
import Price from './Price'
import PropertyName from './PropertyName'
import PropertyInfo from './ProperyInfo'

const Post = ({ post }) => {
    const { mediaUrls, address, propertyInfo, payments, contact, updatedAt } = post

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? "post__container-open" : "post__container"}>
                <PropertyName mediaUrls={mediaUrls} address={address} />
                <PropertyInfo address={address} propertyInfo={propertyInfo} payments={payments} />
                <Price payments={payments} updatedAt={updatedAt} />
                {isOpen && <PhoneBtn contact={contact} />}
            </div>
            { isOpen && <div className="post-main-area__container">
                <div className="post-main-area__padding" />
                <PostMainArea post={post} />
            </div>}
        </>
    )
}

export default Post