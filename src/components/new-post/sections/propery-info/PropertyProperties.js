import React, { useContext } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'
import PropertiesItems from './PropertiesItems'

const ProperyProperties = () => {

    const { newPost } = useContext(Yad2Context)

    const titles = Object.keys(newPost.propertyInfo.properties)

    return (
        <div>
            <h4>מאפייני הנכס</h4>
            <div className="properties__container">
                {titles.map((title) => <PropertiesItems key={title} title={title} />)}
            </div>
        </div>
    )
}

export default ProperyProperties