import React, { useReducer, useState } from 'react'
import AdvancedSearchReducer from '../reducers/search/AdvancedSearchReducer'
export const SearchContext = React.createContext()
export const initialAdvancedSearchState = {
    checkBoxes: {
        "דלתות פנדור": false,
        "חניה": false,
        "מעלית": false,
        "מיזוג": false,
        "מרפסת": false,
        'ממ"ד': false,
        "סורגים": false,
        "מחסן": false,
        "גישה לננכים": false,
        "משופצת": false,
        "מרוהטת": false,
        "חיות מחמד": false,
        "לשותפים": false,
        "לטווח ארוך": false,
        "בבלעדיות": false
    },
    floors: [-2, 13],
    size: [-1, -1],
    entryDate: null,
    freeText: ''
}

const SearchContextProvider = (props) => {

    //area states
    const [areaSearch, setAreaSearch] = useState("")
    //asset types states
    const [selectAll, setSelectAll] = useState(false)
    const [deselectAll, setDeselectAll] = useState(false)
    const [selectedTypes, setSelectedTypes] = useState({})
    const [assetTypes, setAssetTypes] = useState([])
    //price range state
    const [PriceRange, setPriceRange] = useState(["", ""])
    //num of rooms state
    const [numOfRooms, setNumOfRooms] = useState([0, 0])
    //advanced search
    const [advancedSearchOptions, dispatchAdvancedSearchOptions] = useReducer(AdvancedSearchReducer, initialAdvancedSearchState)
    const [advancedSearchNumOfFilters, setAdvancedSearchNumOfFilters] = useState(0)
    //results
    const [listings, setListings] = useState([])
    const [numOfListings, setNumOfListings] = useState(0)
    //sort name
    const [title, setTitle] = useState("לפי תאריך")

    return (
        <SearchContext.Provider value={{
            //states and reducers to pass
            title, setTitle,
            listings, setListings,
            numOfListings, setNumOfListings,
            selectAll, setSelectAll,
            deselectAll, setDeselectAll,
            selectedTypes, setSelectedTypes,
            assetTypes, setAssetTypes,
            areaSearch, setAreaSearch,
            PriceRange, setPriceRange,
            numOfRooms, setNumOfRooms,
            advancedSearchOptions, dispatchAdvancedSearchOptions,
            advancedSearchNumOfFilters, setAdvancedSearchNumOfFilters
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}



export default SearchContextProvider