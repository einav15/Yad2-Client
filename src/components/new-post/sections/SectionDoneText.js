import React, { useContext } from 'react'
import { Yad2Context } from '../../../context/Yad2Context'


const SectionDoneText = ({ num }) => {
    const { newPost } = useContext(Yad2Context)
    let text
    switch (num) {
        case 1:
            text = null
            break;
        case 2:
            text = `${newPost.address.propertyType} - ${newPost.address.city} - ${newPost.address.street} - קומה ${newPost.address.floorNum}`
            break;
        case 3:
            text = `${newPost.propertyInfo.numOfRooms} חדרים`
            break;
        case 4:
            text = `מס' תשלומים - ${newPost.payments.numOfPayments} - מחיר: ${newPost.payments.price} ₪`
            break;
        case 6:
            text = `${newPost.contact.main.name} - ${newPost.contact.main.number}`
            break;
        default:
            break;
    }

    return (
        <div className="mid-title-text">
            {text}
        </div>
    )
}


export default SectionDoneText