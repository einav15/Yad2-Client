import React from 'react'

const NewPostHeader = ({ user, screenWidth, icons, exitNewPostPage }) => {
    return (
        <div className="post-page__header-container">
            <div className="post-page__header">
                <div className="post-page__header">
                    <img id="logo" alt="logo" src="https://assets.yad2.co.il/personal/images/general/new_logo_orange.png" />
                    פרסום מודעה חדשה
                </div>
                <div className="post-page__header left">
                    <div className="user-icon">
                        <img alt="user" src={icons.user} />
                        <span>{user?.user.firstName}</span>
                    </div>
                    {screenWidth > 400 && <span style={{ margin: "0 16px" }}>צור קשר</span>}
                    <button onClick={exitNewPostPage} className="exit-btn">{screenWidth > 630 && "יציאה"} <span>X</span></button>
                </div>
            </div>
        </div>
    )
}

export default NewPostHeader