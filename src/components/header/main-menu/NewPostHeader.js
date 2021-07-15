import React from 'react'

const NewPostHeader = ({ user, screenWidth, icons, exitNewPostPage }) => {
    return (
        <div className="post-page__header-container">
            <div className="post-page__header">
                <div className="post-page__header">
                    <img id="logo" alt="logo" src={screenWidth < 631 ? "https://i.ibb.co/fvK1SV0/1.png" : "https://assets.yad2.co.il/personal/images/general/new_logo_orange.png"} />
                    פרסום מודעה חדשה
                </div>
                <div className="post-page__header left">
                    <div className="user-icon">
                        <img alt="user" src={icons.user} />
                        <span>{user?.user.firstName}</span>
                    </div>
                    <span style={{ margin: "0 16px" }}>צור קשר</span>
                    <button onClick={exitNewPostPage} className="exit-btn">יציאה <span>X</span></button>
                </div>
            </div>
        </div>
    )
}

export default NewPostHeader