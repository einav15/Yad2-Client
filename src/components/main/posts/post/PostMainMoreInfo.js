import React from 'react'

const PostMainMoreInfo = ({ propertyInfo, payments, address }) => {

    const entryDate = () => {
        const date = new Date((Date)(payments.entryDate["$date"]["$numberLong"]))
        return date < new Date() ?
            "כניסה מיידית" : `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} `
    }

    return (
        <div className="post-main-area__more-info">
            <div className="more-info__item">תאריך כניסה <b>{entryDate()}</b></div>
            <div className="more-info__item">ועד בית (לחודש) <b>{payments.buildingFee || "לא צויין"}</b></div>
            <div className="more-info__item">קומות בבניין <b>{address.floorsInBuilding}</b></div>
            {propertyInfo.porch > 0 && <div className="more-info__item">מרפסות <b>{propertyInfo.porch}</b></div>}
            <div className="more-info__item">מס תשלומים <b>{payments.numOfPayments}</b></div>
            <div className="more-info__item">ארנונה לחודשיים <b>{payments.arnona || "לא צויין"}</b></div>
            <div className="more-info__item">חניות <b>{propertyInfo.parking > 0 ? propertyInfo.parking : "ללא"}</b></div>
        </div>
    )
}

export default PostMainMoreInfo