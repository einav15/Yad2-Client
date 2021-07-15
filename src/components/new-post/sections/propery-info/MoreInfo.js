import React, { useContext } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'

const MoreInfo = () => {
    const { newPost, dispatchNewPost } = useContext(Yad2Context)
    const onChangeText = (e) => {
        const propertyInfo = { ...newPost.propertyInfo }
        propertyInfo.freeText = e.target.value
        dispatchNewPost({ type: "PROPERTY_INFO", propertyInfo })
    }

    return (
        <>
            <h4>מה חשוב לך שידעו על הנכס? </h4>
            <div className="more-info__container">
                <div className="more-info__header">
                    <span>פרוט הנכס</span>
                    <span style={{ color: "#ccc" }}>{newPost.propertyInfo.freeText?.length || 0}/400</span>
                </div>
                <textarea
                    placeholder="זה המקום לתאר את הפרטים הבולטים, למשל, האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכו'"
                    value={newPost.propertyInfo.freeText}
                    onChange={onChangeText}
                    maxLength={400}
                />
            </div>
        </>
    )
}

export default MoreInfo