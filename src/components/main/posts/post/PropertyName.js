import React from 'react'

const PropertyName = ({ mediaUrls, address }) => {

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

    return (
        <div className="property-name-pic">
            <img alt="pic" src={takeFirstImageFromArray() || "https://assets.yad2.co.il/yad2site/y2assets/images/pages/feed/feed_re_placeholder_small.png"} />
            <div className="property-name__title">
                <span className="property-name__title-top">{`${address.street} ${address.number}`} </span>
                <span className="property-name__title-bottom">{`${address.propertyType},${address.city}`}</span>
            </div>
        </div>
    )
}

export default PropertyName