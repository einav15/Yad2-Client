import React from 'react'

const FloorDropdown = ({ to, minimum, setFloor }) => {

    const classname = to ? " offset-up-to" : ""

    const onClickSetFloor = (e) => {
        const pick = e.target.innerHTML
        let floor = pick === "הכל" ? -2 : pick === "מרתף/פרטר" ? -1 : pick
        if (to && floor === -2)
            floor = 13
        setFloor(floor)
    }

    return (
        <>
            <div className={"dropdown-triangle-background" + classname} />
            <div className={"dropdown-triangle" + classname} />
            <div className={"floor-number-dropdown" + classname}>
                <ul className={"floor-number-dropdown__list"}>
                    <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">הכל</li>
                    {(!to || (to && minimum <= -1)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">מרתף/פרטר</li>}
                    {(!to || (to && minimum <= 0)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">0</li>}
                    {(!to || (to && minimum <= 1)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">1</li>}
                    {(!to || (to && minimum <= 2)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">2</li>}
                    {(!to || (to && minimum <= 3)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">3</li>}
                    {(!to || (to && minimum <= 4)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">4</li>}
                    {(!to || (to && minimum <= 5)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">5</li>}
                    {(!to || (to && minimum <= 6)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">6</li>}
                    {(!to || (to && minimum <= 7)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">7</li>}
                    {(!to || (to && minimum <= 8)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">8</li>}
                    {(!to || (to && minimum <= 9)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">9</li>}
                    {(!to || (to && minimum <= 10)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">10</li>}
                    {(!to || (to && minimum <= 11)) && <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">11</li>}
                    <li onClick={onClickSetFloor} className="floor-number-dropdown__list-item">12</li>
                </ul>
            </div>
        </>
    )
}

export default FloorDropdown