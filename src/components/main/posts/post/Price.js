import React from 'react'

const separator = (num) => {
    let str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

const Price = ({ payments, updatedAt }) => {
    const now = new Date()
    const date = new Date(updatedAt)
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const updatedAtParse = () => {
        const updatedAtParsed = date < today ? `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ` : "עודכן היום"
        return updatedAtParsed
    }

    return (
        <div className="price">
            <div className="price__div">
                <p>₪{separator(payments.price)}</p>
                <span>{updatedAtParse()}</span>
            </div>
        </div>
    )
}

export default Price