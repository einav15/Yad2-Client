import React, { useContext } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'

const propertyType = [
    "דירה", "דירת גן", "בית פרטי/קוטג'", "גג/פנטהאוז", "מגרשים", "דירת נופש", "דו משפחתי", "מרתף/פרטר", "טריפלקס", "יחידת דיור", "משק חקלאי/נחלה", "משק עזר", "דיור מוגן", "החלפת דירות", "סאבלט", "בניין מגורים", "סטודיו/לופט", "מחסן", "קב' רכישה/זכות לנכס", "חניה", "כללי"
]

const PropertyType = () => {

    const { newPost, dispatchNewPost } = useContext(Yad2Context)

    const onChangePropertyType = (e) => {
        const address = newPost.address ? { ...newPost.address } : {}
        address.propertyType = e.target.value
        dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
    }

    return (
        <div className="input__container">
            <label>סוג הנכס*</label>
            <select value={newPost?.address?.propertyType} onChange={onChangePropertyType}>
                {propertyType.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
        </div>
    )
}

export default PropertyType

