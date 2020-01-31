
import { RECEIVE_FILMS, ADD_COMMENTS } from '../actions/actionsTypes';

const initialState = {
    films: [],
    comments: []
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case RECEIVE_FILMS:
            stateCopy.films = action.payload
            break
        case ADD_COMMENTS:
            stateCopy.comments = action.payload
            break
        default:
            break
    }
    return stateCopy;
};