import React from 'react'

const NumOfRoomsDropdown = ({ setAmount, to, amountFrom }) => {

    const classname = to ? " offset-up-to" : ""

    const onClickSetAmount = (e) => {
        const amount = e.target.innerHTML === "הכל" ? 0 : e.target.innerHTML
        setAmount(amount)
    }

    return (
        <>
            <div className={"dropdown-triangle-background" + classname} />
            <div className={"dropdown-triangle" + classname} />
            <div className={"rooms-amount-dropdown" + classname}>
                <ul className={"rooms-amount-dropdown__list"}>
                    <li onClick={onClickSetAmount} className="rooms-amount-dropdown__list-item">הכל</li>
                    {(!to || (to && amountFrom <= 1)) && <li onClick={onClickSetAmount} className="rooms-amount-dropdown__list-item">1</li>}
                    {(!to || (to && amountFrom <= 1.5)) && <li onClick={onClickSetAmount} className="rooms-amount-dropdown__list-item">1.5</li>}
                    {(!to || (to && amountFrom <= 2)) && <li onClick={onClickSetAmount} className="rooms-amount-dropdown__list-item">2</li>}
                    {(!to || (to && amountFrom <= 2.5)) && <li onClick={onClickSetAmount} className="rooms-amount-dropdown__list-item">2.5</li>}
                    {(!to || (to && amountFrom <= 3)) && <li onClick={onClickSetAmount} className="rooms-amount-dropdown__list-item">3</li>}
                    {(!to || (to && amountFrom <= 3.5)) && <li onClick={onClickSetAmount} className="rooms-amount-dropdown__list-item">3.5</li>}
                    <li onClick={onClickSetAmount} className="rooms-amount-dropdown__list-item">4</li>
                </ul>
            </div>
        </>
    )
}

export default NumOfRoomsDropdown