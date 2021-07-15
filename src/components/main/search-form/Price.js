import React from 'react'

const Price = ({ PriceRange, setPriceRange }) => {

    const onChangePriceFrom = (e) => {
        if ((Number)(e.target.value))
            setPriceRange([e.target.value, PriceRange[1]])
        else {
            e.target.value = ""
            setPriceRange(["", PriceRange[1]])
        }
    }

    const onChangePriceTo = (e) => {
        if ((Number)(e.target.value))
            setPriceRange([PriceRange[0], e.target.value])
        else {
            e.target.value = ""
            setPriceRange([PriceRange[0], ""])
        }

    }

    return (
        <div className="form-input price-length">
            <span>מחיר</span>
            <div style={{ display: "flex" }}>
                <input defaultValue={(Number)(PriceRange[0]) ? PriceRange[0] : null} onChange={onChangePriceFrom} name="price-start" type="text" placeholder="ממחיר" />
                <input defaultValue={(Number)(PriceRange[1]) ? PriceRange[1] : null} onChange={onChangePriceTo} name="price-end" type="text" placeholder="עד מחיר" />
            </div>
        </div>
    )
}

export default Price

