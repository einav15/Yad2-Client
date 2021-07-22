import React, { useEffect, useState } from 'react'
import PicCarousel from './PicCarousel';
import { icons } from '../../../../utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const PropertyName = ({ mediaUrls, address, isOpen }) => {

    const [pictures, setPictures] = useState([])
    const [isCarouselOpen, setIsCarouselOpen] = useState(false)
    const [isHover, setIsHover] = useState(false)

    let picturesAmount

    const imagesArray = () => {
        const pics = []
        if (mediaUrls.mainImg)
            pics.push(mediaUrls.mainImg)

        for (let i = 0; i < mediaUrls.images?.length; i++) {
            const img = mediaUrls.images[i]
            if (img)
                pics.push(img)
        }
        picturesAmount = pics.length
        return pics
    }


    const imagesToArray = () => {
        return imagesArray()
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



    return (
        <>
            <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="property-name-pic">
                <div className="pic__container">
                    <img onClick={openPicCarousel} alt="pic" src={takeFirstImage() || "https://assets.yad2.co.il/yad2site/y2assets/images/pages/feed/feed_re_placeholder_small.png"} />
                </div>
                <div className="property-name__title">
                    <span className="property-name__title-top">{`${address.street} ${address.number}`} </span>
                    <span className="property-name__title-bottom">{`${address.propertyType},${address.city}`}</span>
                </div>
            </div>
            {isCarouselOpen && <PicCarousel pictures={pictures} setIsCarouselOpen={setIsCarouselOpen} isCarouselOpen={isCarouselOpen} />}
        </>
    )
}

export default PropertyName