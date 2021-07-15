import React, { useContext, useEffect, useState } from 'react'
import NumOfPayments from './NumOfPayments'
import OtherInputs from './OtherInputs'
import DatePick from '../../../DatePick'
import { Yad2Context } from '../../../../context/Yad2Context'
import NextLastBtns from '../../NextLastBtns'

const Payments = ({ next, goBackToLastSection }) => {

    const { newPost, dispatchNewPost } = useContext(Yad2Context)

    const [isImmediate, setIsImmediate] = useState(false)
    const [enableSubmit, setEnableSubmit] = useState(false)
    const [reset, setReset] = useState(false)


    const onChangeImmediate = () => {
        setReset(isImmediate)
        setIsImmediate(!isImmediate)
    }

    const inputs = [
        { title: "ועד בית", placeholder: "הכנסת סכום תשלום לועד בית", name: "buildingFee" },
        { title: "ארנונה לחודשיים", placeholder: "סכום הארנונה לתשלום", name: "arnona" },
        { title: 'מ"ר בנוי', placeholder: 'כמה מ"ר יש בנכס', name: "size" },
        { title: 'גודל במ"ר סך הכל*', placeholder: '', name: "actualSize" },
        { title: 'מחיר', placeholder: 'סכום מינימלי 100', name: "price" },
    ]


    const setEntryDate = (entryDate) => {
        const payments = { ...newPost.payments }
        payments.entryDate = entryDate
        dispatchNewPost({ type: "PROPERTY_PAYMENTS", payments })
    }

    useEffect(() => {
        const payments = newPost.payments
        setEnableSubmit(payments.actualSize !== '' && payments.price > 99 && payments.entryDate)
    }, [newPost.payments])

    const onSubmitForm = (e) => {
        e.preventDefault()
        next(true)
    }

    return (
        <>
            <img className="recommendation" alt="message" src="https://i.ibb.co/G2ZCT9D/Screenshot-20210708-155723.png" />
            <form onSubmit={onSubmitForm} className="payments-form">
                <NumOfPayments />
                {inputs.map((input) => <OtherInputs key={input.name} info={input} />)}
                <div className="input__container advanced-search__entry-date">
                    <label>תאריך כניסה*</label>
                    <div className="date-and-immediate-btn">
                        <DatePick type="post" setDate={setEntryDate} date={newPost.payments.entryDate} reset={reset} disabled={isImmediate} setDisabled={setIsImmediate} />
                        <span id="select-immediate-entry" onClick={onChangeImmediate}>
                            <input checked={isImmediate} onChange={onChangeImmediate} type="checkbox" />
                            <p onClick={onChangeImmediate}>מיידי</p>
                        </span>
                    </div>
                </div>
                <NextLastBtns enableSubmit={enableSubmit} goBackToLastSection={goBackToLastSection} lastSection={3} />

            </form>
        </>
    )
}

export default Payments








