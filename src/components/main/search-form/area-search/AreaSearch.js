import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'


const AreaSearch = ({ areaSearch, setAreaSearch }) => {

    const [areaInput, setAreaInput] = useState("")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const onChangeSearch = (e) => {
        setAreaInput(e.target.value.trim())
    }

    useEffect(() => {
        if (areaInput === "")
            return setIsDropdownOpen(false)

        setIsDropdownOpen(true)
    }, [areaInput])

    return (
        <>
            <div className="form-input area-length">
                <span>חפשו אזור, עיר, שכונה או רחוב</span>
                <input onChange={onChangeSearch} name="area" type="text" placeholder="לדוגמה: פארק הים" />
                {isDropdownOpen && <Dropdown input={areaInput} />}
            </div>

        </>
    )
}

export default AreaSearch