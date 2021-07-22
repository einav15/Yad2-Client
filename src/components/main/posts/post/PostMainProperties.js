import React from 'react'
import PropertiesItems from './PropertiesItems'

const PostMainProperties = ({ propertyInfo }) => {

    const properties = propertyInfo.properties

    return (
        <div className="post-main-area__properties">
            <h3>מה יש בנכס</h3>
            <div className="post-main-area__properties-items">
                <PropertiesItems name="מיזוג" enabled={properties.includes("מיזוג")} />
                <PropertiesItems name="לשותפים" enabled={properties.includes("לשותפים")} />
                <PropertiesItems name="סורגים" enabled={properties.includes("סורגים")} />
                <PropertiesItems name="מטבח כשר" enabled={properties.includes("מטבח כשר")} />
                <PropertiesItems name="מעלית" enabled={properties.includes("מעלית")} />
                <PropertiesItems name="גישה לנכים" enabled={properties.includes("גישה לנכים")} />
                <PropertiesItems name="משופצת" enabled={properties.includes("משופצת")} />
                <PropertiesItems name='ממ"ד' enabled={properties.includes('ממ"ד')} />
                <PropertiesItems name="מחסן" enabled={properties.includes("מחסן")} />
                <PropertiesItems name="חיות מחמד" enabled={properties.includes("חיות מחמד")} />
                <PropertiesItems name="דלתות פנדור" enabled={properties.includes("דלתות פנדור")} />
                <PropertiesItems name="מזגן תדיראן" enabled={properties.includes("מזגן תדיראן")} />
                <PropertiesItems name="ריהוט" enabled={properties.includes("ריהוט")} />
            </div>
        </div>
    )
}

export default PostMainProperties