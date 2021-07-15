import React, { useContext } from 'react'
import { Yad2Context } from '../../../../context/Yad2Context'
import Post from './Post'
import PostTablet from './PostTablet'

const doc = {
    "_id": {
        "$oid": "60ed9072d171fae26a134f2e"
    },
    "mediaUrls": {
        "images": ["https://einav-yad2-media.s3.eu-west-1.amazonaws.com/media/60ed65aaa1f4223315f7fb93/60ed9072d171fae26a134f2e/y2_2_01652_20210630180654.jpeg", "https://einav-yad2-media.s3.eu-west-1.amazonaws.com/media/60ed65aaa1f4223315f7fb93/60ed9072d171fae26a134f2e/y2_3_05492_20210630180606.jpeg", "https://einav-yad2-media.s3.eu-west-1.amazonaws.com/media/60ed65aaa1f4223315f7fb93/60ed9072d171fae26a134f2e/y2_4_03873_20210630180631.jpeg"], "mainImg": "https://einav-yad2-media.s3.eu-west-1.amazonaws.com/media/60ed65aaa1f4223315f7fb93/60ed9072d171fae26a134f2e/y2_1_05080_20210630180638.jpeg"
    },
    "contact": {
        "main": {
            "name": "עינב",
            "number": "0502001226"
        }, "second": {
            "name": "",
            "number": ""
        },
        "email": "einav1@gmail.com"
    }, "address": {
        "propertyType": "דירה"
        , "city": "תל אביב - יפו",
        "street": "שייקה דן",
        "number": "12",
        "floorNum": "1",
        "floorsInBuilding": "1"
    }, "propertyInfo": {
        "numOfRooms": {
            "$numberInt": "2"
        },
        "parking": {
            "$numberInt": "0"
        },
        "porch": {
            "$numberInt": "0"
        },
        "properties": {
            "מיזוג": true, "ממ\"ד": false, "מחסן": false, "דלתות פנדור": true, "ריהוט": true, "גישה לנכים": false, "מעלית": false, "מזגן תדיראן": true, "משופצת": true, "סורגים": true, "לשותפים": false, "חיות מחמד": false, "מטבח כשר": false, "דוד שמש": false
        }, "freeText": "דירת שני חדרים קרקע יפה ומשופצת, ברחוב שקט וירוק, חניה צמודה, מרוהטת, רצפת פורצלן, קרובה לתחבורה ציבורית לכל חלקי תל אביב"
    },
    "payments": {
        "numOfPayments": "12",
        "buildingFee": null,
        "arnona": null,
        "size": null,
        "actualSize": {
            "$numberInt": "50"
        },
        "price": {
            "$numberInt": "2900"
        },
        "entryDate": {
            "$date": {
                "$numberLong": "1626181619632"
            }
        }
    },
    "createdAt": { "$date": { "$numberLong": "1626181746493" } }, "updatedAt": { "$date": { "$numberLong": "1626181753058" } }, "__v": { "$numberInt": "0" }
}


const PostsContainer = () => {

    const { screenWidth } = useContext(Yad2Context)

    return (
        <div className={(screenWidth > 800 ? "" : "mobile-") + "posts__container"}>
            {
                screenWidth > 800 ?
                    <Post post={doc} /> :
                    <PostTablet post={doc} />
            }

        </div>
    )
}

export default PostsContainer