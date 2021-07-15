import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useHistory } from 'react-router'
import { LoginContext } from '../../context/LoginContext'
import { Yad2Context } from '../../context/Yad2Context'
import { NewPostEnabledReducer } from '../../reducers/NewPostReducer'
import Section from './Section'


const sections = [{
    title: "באיזו קטגוריה נפרסם היום?",
    num: 1
}, {
    title: "כתובת הנכס",
    num: 2
}, {
    title: "על הנכס",
    num: 3
}, {
    title: "תשלומים, תאריכים ועוד",
    num: 4
}, {
    title: "תמונות וסרטונים",
    num: 5
}, {
    title: "פרטים ליצירת קשר",
    num: 6
}, {
    title: "סיום פרסום",
    num: 7
}]

const NewPost = () => {

    const { user } = useContext(LoginContext)
    const { setIsNewPostPage, setLocation } = useContext(Yad2Context)
    const history = useHistory()

    const [openSection, setOpenSection] = useState(1)
    const [enabled, dipatchEnabled] = useReducer(NewPostEnabledReducer, { "1": true })

    useEffect(() => {
        setLocation(window.location.pathname)
        if (!user) {
            history.push('/')
            setIsNewPostPage(false)
        }
    }, [setLocation, history, setIsNewPostPage, user])

    const openClickedSection = (num) => {
        if (enabled[num])
            setOpenSection(num)
    }


    return (
        <div className="new-post-page__container">
            {sections.map((section) =>
                <Section
                    key={section.title}
                    title={section.title}
                    num={section.num}
                    openSection={openSection}
                    setOpenSection={setOpenSection}
                    dipatchEnabled={dipatchEnabled}
                    enabled={enabled}
                    onClick={openClickedSection}
                />
            )}
        </div>
    )
}

export default NewPost