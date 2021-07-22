import React, { useEffect } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { disableScroll } from '../../../../utilities'

const PicCarousel = ({ pictures, setIsCarouselOpen }) => {

    useEffect(() => {
        disableScroll(true)
    }, [])

    const closeCarousel = () => {
        setIsCarouselOpen(false)
        disableScroll(false)
    }

    return (
        pictures &&
        <div onClick={e => e.stopPropagation()} className="carousel-backdrop">
            <Carousel plugins={['arrows']}>
                {pictures.map((pic) =>
                    <img key={pic} src={pic} alt="pic" />
                )}
            </Carousel>
            <span className="close-carousel" onClick={closeCarousel}>X</span>
        </div>
    )

}

export default PicCarousel