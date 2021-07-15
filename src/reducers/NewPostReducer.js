import { newPostInitialState } from "../context/Yad2Context"


export const NewPostEnabledReducer = (state, action) => {
    switch (action.type) {
        case 'ENABLE_SECTION':
            const ret = state
            ret[action.num] = true
            return ret
        default:
            return { "1": true }
    }
}

const NewPostReducer = (state, action) => {
    switch (action.type) {
        case 'PROPERTY_ADDRESS':
            return { ...state, address: action.address }
        case 'PROPERTY_INFO':
            return { ...state, propertyInfo: action.propertyInfo }
        case 'PROPERTY_PAYMENTS':
            return { ...state, payments: action.payments }
        case 'PROPERTY_MEDIA':
            return { ...state, media: action.media }
        case 'PROPERTY_CONTACT':
            return { ...state, contact: action.contact }
        case 'RESET':
            return { ...newPostInitialState }
        case 'TEST':
            console.log({ ...newPostInitialState })
            return state
        default:
            return state
    }
}

export default NewPostReducer

