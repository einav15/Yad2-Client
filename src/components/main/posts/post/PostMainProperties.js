import React from 'react'
import PropertiesItems from './PropertiesItems'

const PostMainProperties = ({ propertyInfo }) => {

    const properties = propertyInfo.properties

    return (
        <div className="post-main-area__properties">
            <h3>מה יש בנכס</h3>
            <div className="post-main-area__properties-items">
                <PropertiesItems name="מיזוג" enabled={properties["מיזוג"]} />
                <PropertiesItems name="לשותפים" enabled={properties["לשותפים"]} />
                <PropertiesItems name="סורגים" enabled={properties["סורגים"]} />
                <PropertiesItems name="מטבח כשר" enabled={properties["מטבח כשר"]} />
                <PropertiesItems name="מעלית" enabled={properties["מעלית"]} />
                <PropertiesItems name="גישה לנכים" enabled={properties["גישה לנכים"]} />
                <PropertiesItems name="משופצת" enabled={properties["משופצת"]} />
                <PropertiesItems name='ממ"ד' enabled={properties['ממ"ד']} />
                <PropertiesItems name="מחסן" enabled={properties["מחסן"]} />
                <PropertiesItems name="חיות מחמד" enabled={properties["חיות מחמד"]} />
                <PropertiesItems name="דלתות פנדור" enabled={properties["דלתות פנדור"]} />
                <PropertiesItems name="מזגן תדיראן" enabled={properties["מזגן תדיראן"]} />
                <PropertiesItems name="ריהוט" enabled={properties["ריהוט"]} />
            </div>
        </div>
    )
}

export default PostMainProperties