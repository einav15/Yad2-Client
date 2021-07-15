import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = ({ type, reset, disabled, setDisabled, setDate, date }) => {

    const [selectedDate, setSelectedDate] = useState(date ? date : null);
    const [today] = useState(new Date())

    useEffect(() => {
        if (disabled)
            setSelectedDate(today)
    }, [disabled, setSelectedDate, today])

    useEffect(() => {
        if (reset)
            setSelectedDate(null)
    }, [reset, setSelectedDate])

    useEffect(() => {
        setDate(selectedDate)
    }, [selectedDate])

    return (
        type === "birth-date" ?
            <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                maxDate={new Date(today.getFullYear() - 18, today.getMonth(), today.getDay())}
                placeholderText="בחר תאריך לידה"
            /> :
            <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                onSelect={() => setDisabled(false)}
                minDate={new Date()}
                placeholderText={type === 'search' ? "החל מ- הזינו תאריך" : "DD/MM/YYYY"}
            />
    )
}

export default DatePick