import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Yad2Context } from '../../../../context/Yad2Context'
import { icons } from '../../../../utilities'



const MediaModule = ({ type, num }) => {
    const { newPost, dispatchNewPost } = useContext(Yad2Context)
    const [file, setFile] = useState(type === "images" ? newPost.media.images[num] : newPost.media[type])

    const onChangeInsertImg = (e) => {
        const inFile = e.target.files[0]
        if (inFile) {
            setFile(inFile)
        }
    }

    const onClickRemove = () => {
        setFile(null)
    }

    useEffect(() => {
        const media = { ...newPost.media }
        media.images = [...newPost.media.images]
        if (type === "images")
            media.images[num] = file
        else
            media[type] = file
        dispatchNewPost({ type: "PROPERTY_MEDIA", media })
    }, [file])

    return (
        <div
            className={"media-form__module " + (type === "invisible" ? "invisible-border" : (type === "mainImg" ? "invisible-border main-img__container" : ""))} >
            {type === "mainImg" ?
                <>
                    <span className="main-img__title">תמונה ראשית</span>
                    <div style={{ background: "white", height: "100%" }}>
                        <div
                            className={"main-img backgroung-img__no-img"}
                            style={{ backgroundImage: file && `url(${URL.createObjectURL(file)})` }}
                        >
                            {file && <FontAwesomeIcon onClick={onClickRemove} className="delete-img" icon={icons.faTrashAlt} />}
                            <input accept="image/*ta" className="file-upload__input" type="file" onChange={onChangeInsertImg} />
                        </div>
                    </div>
                </> : type === "images" ?
                    <div
                        className="backgroung-img__no-img"
                        style={{ backgroundImage: file && `url(${URL.createObjectURL(file)})` }}
                    >
                        {file && <FontAwesomeIcon onClick={onClickRemove} className="delete-img" icon={icons.faTrashAlt} />}
                        <input accept="image/*" className="file-upload__input" type="file" onChange={onChangeInsertImg} />
                    </div> : type === "video" ?

                        <div className="backgroung-img__no-img backgroung-vid"
                            style={{ backgroundImage: file && `url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png")` }}
                        >
                            {file && <FontAwesomeIcon onClick={onClickRemove} className="delete-img" icon={icons.faTrashAlt} />}
                            <input accept="video/*" className="file-upload__input" type="file" onChange={onChangeInsertImg} />
                        </div> :
                        <div />
            }
        </div>
    )
}

export default MediaModule