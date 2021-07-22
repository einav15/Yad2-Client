import React, { useContext, useEffect, useState } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context';
import { disableScroll } from '../../../../utilities'
import PhoneBtn from './PhoneBtn'
import PicCarousel from './PicCarousel';
import PostMainArea from './PostMainArea'
import PropertyInfo from './ProperyInfo';

const separator = (num) => {
    let str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

const PostTablet = ({ post }) => {
    const { mediaUrls, address, propertyInfo, payments, contact, updatedAt } = post

    const { isBackdrop } = useContext(Yad2Context)
    const [isOpen, setIsOpen] = useState(false)
    const [isCarouselOpen, setIsCarouselOpen] = useState(false)
    const [pictures, setPictures] = useState([])


    const imagesToArray = () => {
        const pics = []
        if (mediaUrls.mainImg)
            pics.push(mediaUrls.mainImg)

        for (let i = 0; i < mediaUrls.images?.length; i++) {
            const img = mediaUrls.images[i]
            if (img)
                pics.push(img)
        }
        return pics
    }

    const takeFirstImage = () => {
        const pics = imagesToArray()
        return pics.length > 0 ? pics[0] : null
    }

    const openPicCarousel = (e) => {
        setPictures(imagesToArray())
        e.stopPropagation()
        if (pictures.length === 0 || !isOpen)
            return
    }

    useEffect(() => {
        if (pictures.length > 0)
            setIsCarouselOpen(true)
    }, [pictures])

    useEffect(() => {
        disableScroll(isBackdrop, isOpen)
    }, [isOpen])

    const now = new Date()
    const date = new Date(updatedAt)
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const updatedAtParse = () => {
        const updatedAtParsed = date < today ? `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ` : "עודכן היום"
        return updatedAtParsed
    }

    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className={(isOpen ? "opened " : "") + "mobile-post__container"}>
                {isOpen && <div className="exit-post">X</div>}
                <div className="img__container">
                    <img onClick={openPicCarousel} alt="img" src={takeFirstImage() || "https://assets.yad2.co.il/yad2site/y2assets/images/pages/feed/feed_re_placeholder_small.png"} />
                </div>
                <div className="mobile-post__info">
                    <p className="price">₪{separator(payments.price)}</p>
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
                {isCarouselOpen && <PicCarousel pictures={pictures} setIsCarouselOpen={setIsCarouselOpen} isCarouselOpen={isCarouselOpen} />}
            </div>
        </>
    )
}

export default PostTablet