import React, { useContext } from 'react'
import { Yad2Context } from '../context/Yad2Context'

const Backdrop = ({ close }) => {
    const { isBackdrop } = useContext(Yad2Context)


    return (
        isBackdrop &&
        <div onClick={close} className="backdrop" />
    )
}


export default Backdrop