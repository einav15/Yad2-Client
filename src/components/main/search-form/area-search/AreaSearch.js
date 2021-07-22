import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../../../context/SearchContext'
import searchAutoComplete from './areaAPI'
import Dropdown from './Dropdown'


const AreaSearch = () => {

    const { areaSearch, setAreaSearch } = useContext(SearchContext)
    const [areaInput, setAreaInput] = useState("")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [results, setResults] = useState([])

    const onChangeSearch = async (e) => {
        setAreaSearch('')
        setAreaInput(e.target.value.trim())
    }

    useEffect(() => {
        if (areaInput === "")
            return setIsDropdownOpen(false)

        searchAutoComplete(areaInput).then(res => setResults(res))
        setIsDropdownOpen(true)
    }, [areaInput])

    const close = () => {
        setIsDropdownOpen(false)
    }

    return (
        <>
            <div className="form-input area-length">
                <span>חפשו אזור, עיר, שכונה או רחוב</span>
                <input onChange={onChangeSearch} value={areaSearch || areaInput} name="area" type="text" placeholder="לדוגמה: פארק הים" />
                {isDropdownOpen && <Dropdown setAreaInput={setAreaInput} setAreaSearch={setAreaSearch} close={close} areaInput={areaInput} results={results} />}
            </div>

        </>
    )
}

export default AreaSearch