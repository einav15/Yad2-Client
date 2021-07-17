import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import Axios from 'axios'
import { Yad2Context } from '../../../context/Yad2Context'
import { dbUrl, LoginContext } from '../../../context/LoginContext'
import LoadingBackdrop from '../../LoadingBackdrop'

const SubmitForm = () => {

    const { newPost, dispatchNewPost } = useContext(Yad2Context)
    const { user } = useContext(LoginContext)

    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitNewPost = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const mediaUrls = { images: [] }
        const sendNewPost = { ...newPost, owner: user.user._id }
        sendNewPost.media = null
        await Axios.post(`${dbUrl}listing`, sendNewPost)
            .then(async (res) => {
                if (newPost.media.video !== null) {
                    const data = new FormData()
                    data.append('file', newPost.media.video)
                    await Axios.post(`${dbUrl}upload-media?owner=${user.user._id}&listingId=${res.data}`, data)
                        .then(res => mediaUrls.video = res.data)
                        .catch(e => { })
                }
                if (newPost.media.mainImg !== null) {
                    const data = new FormData()
                    data.append('file', newPost.media.mainImg)
                    await Axios.post(`${dbUrl}upload-media?owner=${user.user._id}&listingId=${res.data}`, data)
                        .then(res => mediaUrls.mainImg = res.data)
                        .catch(e => { })
                }
                for (const img of newPost.media.images) {
                    if (img != null) {
                        const data = new FormData()
                        data.append('file', img)
                        await Axios.post(`${dbUrl}upload-media?owner=${user.user._id}&listingId=${res.data}`, data)
                            .then(res => mediaUrls.images.push(res.data))
                            .catch(e => { })
                    }
                }

                await Axios.patch(`${dbUrl}listing/${res.data}`, { mediaUrls })
                    .catch(e => { })
                setIsLoading(false)
                dispatchNewPost({ type: "RESET" })
                alert("המודעה הועלתה בהצלחה!")
                history.push('/')
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            {isLoading && <LoadingBackdrop title="המודעה מועלית, אנא המתינו" />}
            <div className="submit-form">
                <h4 className="address-form__title">זהו, אנחנו בסוף. לנו נשאר לשמור את המודעה שלך, לך נשאר לבחור את מסלול הפרסום.</h4>
                <form onSubmit={onSubmitNewPost}>
                    <button className="submit-form__free" />
                </form>
            </div>
        </>
    )
}


export default SubmitForm