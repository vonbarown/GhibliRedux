
import { RECEIVE_FILMS } from '../actions/actionsTypes';

const initialState = {
    films: []
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }


    switch (action.type) {
        case RECEIVE_FILMS:
            return stateCopy = {
                films: action.data
            }
        default:
            return stateCopy;
    }
};