import React, { useContext } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'


const numOfRoomOptions = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 8, 9, 10, 11, 12]


const NumOfRooms = () => {
    const { newPost, dispatchNewPost } = useContext(Yad2Context)


    const onChangeNumOfRooms = (e) => {
        const propertyInfo = { ...newPost.propertyInfo }
        propertyInfo.numOfRooms = e.target.value
        dispatchNewPost({ type: "PROPERTY_INFO", propertyInfo })
    }

    return (
        <div className="input__container">
            <label>מספר חדרים*</label>
            <select value={newPost?.propertyInfo?.numOfRooms} onChange={onChangeNumOfRooms}>
                {numOfRoomOptions.map((num) => <option key={num} value={num}>{num}</option>)}
            </select>
        </div>
    )
}

export default NumOfRooms