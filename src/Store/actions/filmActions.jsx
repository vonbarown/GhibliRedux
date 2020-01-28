import { RECEIVE_FILMS } from "./actionsTypes";

export const receiveFilms = (payload) => {
    return {
        type: RECEIVE_FILMS,
        payload
    };
};

