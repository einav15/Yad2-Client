import React, { useContext, useEffect, useState } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'
import { icons } from '../../../../utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import propertiesIcons from '../../../../data/propertiesIcons'

const PropertiesItems = ({ title }) => {

    const { newPost, dispatchNewPost } = useContext(Yad2Context)

    const [isHover, setIsHover] = useState(false)
    const [isPicked, setIsPicked] = useState(newPost.propertyInfo.properties[title])

    const onHover = () => {
        setIsHover(true)
    }

    const offHover = () => {
        setIsHover(false)
    }

    const onClickProperty = () => {
        setIsPicked(!isPicked)
    }

    useEffect(() => {
        const propertyInfo = { ...newPost.propertyInfo }
        propertyInfo.properties = { ...newPost.propertyInfo.properties }
        propertyInfo.properties[title] = isPicked
        dispatchNewPost({ type: "PROPERTY_INFO", propertyInfo })
    }, [isPicked, dispatchNewPost, title])

    return (
        <div >
            <div onClick={onClickProperty} onMouseEnter={onHover} onMouseLeave={offHover} className={"properties-items " + (isPicked ? isHover ? "hover-picked" : "picked" : "")}>
                <FontAwesomeIcon className={isHover ? (isPicked ? "hover-picked" : "hover-orange") : (isPicked ? "picked" : "")} icon={icons[propertiesIcons[title]]} />
                <span className={isHover ? (isPicked ? "hover-picked" : "hover-orange") : (isPicked ? "picked" : "")}>{title}</span>
            </div>
        </div>
    )
}

export default PropertiesItems