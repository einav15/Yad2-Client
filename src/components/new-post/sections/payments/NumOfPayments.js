import React, { useContext } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'

const NumOfPayments = () => {

    const { newPost, dispatchNewPost } = useContext(Yad2Context)

    const numOfPaymentsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "גמיש"]

    const onChangeNumOfPayments = (e) => {
        const payments = { ...newPost.payments }
        payments.numOfPayments = e.target.value
        dispatchNewPost({ type: "PROPERTY_PAYMENTS", payments })
    }

    return (
        <div className="input__container">
            <label>מספר תשלומים*</label>
            <select value={newPost?.payments.numOfPayments} onChange={onChangeNumOfPayments}>
                {numOfPaymentsOptions.map((num) => <option key={num} value={num}>{num}</option>)}
            </select>
        </div>

    )
}

export default NumOfPayments



