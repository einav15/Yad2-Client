import React, { useState } from 'react'
import PhoneBtn from './PhoneBtn'
import PostMainArea from './PostMainArea'
import PropertyInfo from './ProperyInfo';

const separator = (num) => {
    let str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

const PostTablet = ({ post }) => {
    const { mediaUrls, address, propertyInfo, payments, contact, updatedAt } = post

    const [isOpen, setIsOpen] = useState(false)

    const takeFirstImageFromArray = () => {
        if (mediaUrls.mainImg)
            return mediaUrls.mainImg

        for (let i = 0; i < mediaUrls.images?.length; i++) {
            const img = mediaUrls.images[i]
            if (img)
                return img
        }
        return null
    }

    const date = updatedAt["$date"]["$numberLong"]
    const today = new Date(new Date().toJSON().slice(0, 10))
    const updatedAtParse = () => {
        const updatedDate = new Date((Date)(date))
        const updatedAtParsed = date < today ? `${updatedDate.getDay()}/${updatedDate.getMonth()}/${updatedDate.getFullYear()} ` : "עודכן היום"
        return updatedAtParsed
    }


    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className={(isOpen ? "opened " : "") + "mobile-post__container"}>
                {isOpen && <div className="exit-post">X</div>}
                <img alt="img" src={takeFirstImageFromArray() || "https://assets.yad2.co.il/yad2site/y2assets/images/pages/feed/feed_re_placeholder_small.png"} />
                <div className="mobile-post__info">
                    <p className="price">₪{separator(payments.price["$numberInt"])}</p>
                    <p>{`${address.street} ${address.number},`}</p>
                    <p className="margin-bottom">{`${address.city}`}</p>
                    <PropertyInfo address={address} propertyInfo={propertyInfo} payments={payments} />
                </div>
                <div className={"date " + (isOpen ? "date-opened" : "")}>
                    {updatedAtParse()}
                </div>
                {isOpen && <PhoneBtn contact={contact} />}
                {isOpen && <div className="post-main-area__container">
                    <div className="post-main-area__padding" />
                    <PostMainArea post={post} />
                </div>}
            </div>
        </>
    )
}

export default PostTablet