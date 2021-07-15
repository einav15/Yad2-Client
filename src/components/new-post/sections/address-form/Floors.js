import React, { useContext, useEffect, useState } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'

const Floors = () => {
    const { newPost, dispatchNewPost } = useContext(Yad2Context)

    const [floorsError, setFloorsError] = useState(false)
    const [buildingFloorsError, setBuildingFloorsError] = useState(false)
    const [floorFirstOpen, setFloorFirstOpen] = useState(true)
    const [bulidingFloorsFirstOpen, setBulidingFloorsFirstOpen] = useState(true)

    const onChangeFloor = (e) => {
        setFloorFirstOpen(false)
        if (e.target.value > -2) {
            const address = newPost.address ? { ...newPost.address } : {}
            address.floorNum = e.target.value
            dispatchNewPost({ type: "PROPERTY_ADDRESS", address })

        }
    }

    const onChangeBuildingFloors = (e) => {
        setBulidingFloorsFirstOpen(false)
        if (e.target.value > 0) {
            const address = newPost.address ? { ...newPost.address } : {}
            address.floorsInBuilding = e.target.value
            dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
        }
    }

    useEffect(() => {
        if ((Number)(newPost.address.floorNum) > (Number)(newPost.address.floorsInBuilding)) {
            const address = newPost.address ? { ...newPost.address } : {}
            address.floorsInBuilding = newPost.address.floorNum
            dispatchNewPost({ type: "PROPERTY_ADDRESS", address })
        }
        setFloorsError(!newPost.address.floorNum)
        setBuildingFloorsError(!newPost.address.floorsInBuilding)
    }, [newPost, dispatchNewPost])

    return (
        <div className="address-form__floors">
            <div className="input__container">
                <label>קומה*</label>
                <input
                    disabled={!newPost.address.street}
                    placeholder="הכנסת מספר קומה"
                    value={newPost.address.floorNum}
                    onChange={onChangeFloor}
                    className={!floorFirstOpen && floorsError ? "invalid-input" : ""}
                />
                {!floorFirstOpen && floorsError && <div className="error-text">שדה חובה קומה</div>}
            </div>
            <div className="input__container">
                <label>סה"כ קומות בבניין*</label>
                <input
                    max={40}
                    disabled={!newPost.address.street}
                    placeholder='הכנסת סה"כ קומות'
                    value={newPost.address.floorsInBuilding}
                    onChange={onChangeBuildingFloors}
                    className={!bulidingFloorsFirstOpen && buildingFloorsError ? "invalid-input" : ""}
                />
                {!bulidingFloorsFirstOpen && buildingFloorsError && <div className="error-text">שדה חובה סה"כ קומות בבניין</div>}

            </div>
        </div>
    )
}

export default Floors