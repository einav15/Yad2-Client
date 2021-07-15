import React from 'react'

const NumOfRoomsSelect = ({ setFrom, setTo, amountFrom, amountTo }) => {

    return (
        <>
            <div className="rooms-selectors__container add-margin-left">
                <label>מ-</label>
                <select value={amountFrom} onChange={(e) => setFrom(e.target.value)}>
                    <option value={0}>הכל</option>
                    <option value={1}>1</option>
                    <option value={1.5}>1.5</option>
                    <option value={2}>2</option>
                    <option value={2.5}>2.5</option>
                    <option value={3}>3</option>
                    <option value={3.5}>3.5</option>
                    <option value={4}>4</option>
                    <option value={4.5}>4.5</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div className="rooms-selectors__container">
                <label>עד-</label>
                <select value={amountTo} onChange={(e) => setTo(e.target.value)}>
                    <option value={0}>הכל</option>
                    {amountFrom <= 1 && <option value={1}>1</option>}
                    {amountFrom <= 1.5 && <option value={1.5}>1.5</option>}
                    {amountFrom <= 2 && <option value={2}>2</option>}
                    {amountFrom <= 2.5 && <option value={2.5}>2.5</option>}
                    {amountFrom <= 3 && <option value={3}>3</option>}
                    {amountFrom <= 3.5 && <option value={3.5}>3.5</option>}
                    {amountFrom <= 4 && <option value={4}>4</option>}
                    {amountFrom <= 4.5 && <option value={4.5}>4.5</option>}
                    {amountFrom <= 5 && <option value={5}>5</option>}
                </select>
            </div>
        </>
    )
}

export default NumOfRoomsSelect
