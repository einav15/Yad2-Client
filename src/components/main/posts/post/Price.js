import React from 'react'

const separator = (num) => {
    let str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

const Price = ({ payments, updatedAt }) => {
    const date = updatedAt["$date"]["$numberLong"]
    const today = new Date(new Date().toJSON().slice(0, 10))
    const updatedAtParse = () => {
        const updatedDate = new Date((Date)(date))
        const updatedAtParsed = date < today ? `${updatedDate.getDay()}/${updatedDate.getMonth()}/${updatedDate.getFullYear()} ` : "עודכן היום"
        return updatedAtParsed
    }

    return (
        <div className="price">
            <div className="price__div">
                <p>₪{separator(payments.price["$numberInt"])}</p>
                <span>{updatedAtParse()}</span>
            </div>
        </div>
    )
}

export default Price