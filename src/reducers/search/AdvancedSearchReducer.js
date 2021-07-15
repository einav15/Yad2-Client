import { initialAdvancedSearchState } from '../../context/SearchContext'

const AdvancedSearchReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_CHECKBOXES':
            const currentCheckBoxes = { ...state.checkBoxes }
            currentCheckBoxes[action.box] = !currentCheckBoxes[action.box]
            return { ...state, checkBoxes: currentCheckBoxes }
        case 'CHANGE_FLOORS':
            return { ...state, floors: action.floors }
        case 'CHANGE_SIZE':
            return { ...state, size: action.size }
        case 'CHANGE_FREE_TEXT':
            return { ...state, freeText: action.freeText }
        case 'CHANGE_ENTRY_DATE':
            return { ...state, entryDate: action.entryDate }
        case 'CLEAR':
            return initialAdvancedSearchState
        default:
            return state
    }
}

export default AdvancedSearchReducer
