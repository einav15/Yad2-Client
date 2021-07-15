import React, { useContext, useEffect, useState } from 'react'
import DatePick from '../../../DatePick'
import { SearchContext } from '../../../../context/SearchContext'
import { Yad2Context } from '../../../../context/Yad2Context'

const EntryDate = () => {
    const { dispatchAdvancedSearchOptions } = useContext(SearchContext)
    const { screenWidth } = useContext(Yad2Context)
    const [isImmediate, setIsImmediate] = useState(false)
    const [reset, setReset] = useState(false)
    const [entryDate, setEntryDate] = useState(null)

    const onChangeImmediate = () => {
        setReset(isImmediate)
        setIsImmediate(!isImmediate)
    }

    useEffect(() => {
        dispatchAdvancedSearchOptions({ type: "CHANGE_ENTRY_DATE", entryDate })
    }, [entryDate, dispatchAdvancedSearchOptions])

    return (
        <li>
            <span>תאריך כניסה</span>
            <div className="advanced-search__entry-date">
                <DatePick type="search" setDate={setEntryDate} reset={reset} disabled={isImmediate} setDisabled={setIsImmediate} />
                <span id="select-immediate-entry" onClick={onChangeImmediate}>
                    <input checked={isImmediate} onChange={onChangeImmediate} type="checkbox" />
                    <p onClick={onChangeImmediate}> {screenWidth < 631 ? "מיידי" : "כניסה מיידית"}</p>
                </span>
            </div>
        </li>
    )
}

export default EntryDate