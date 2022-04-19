import { FETCH_COMMENTS, ADD_COMMENT, FETCH_POSTS, ADD_POST } from "../action/types";

const initialState = {
    items: [],
    item: {}

}

export default function(state = initialState, action) {

    switch(action.type) {
        case FETCH_COMMENTS:
            console.log('reducing');
            return {
                ...state,
                item: action.payload
            }
            case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
            case ADD_COMMENT:
            return {
                ...state,
                item: action.payload
            };
            case ADD_POST:
                return {
                    ...state,
                    items: action.payload
                };
        default:
            return state;
    }
}