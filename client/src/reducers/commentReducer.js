import { FETCH_COMMENTS, ADD_COMMENT } from "../action/types";

const initialState = {
    items: []
}

export default function(state = initialState, action) {

    switch(action.type) {
        case FETCH_COMMENTS:
            console.log('reducer');
            return {
                ...state,
                items: action.payload
            }
            case ADD_COMMENT:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}