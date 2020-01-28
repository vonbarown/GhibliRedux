import { RECEIVE_FILMS } from "./actionsTypes";

export const addFilms = (payload) => {
    return {
        type: RECEIVE_FILMS,
        payload
    };
};

// export const decrementCount = () => {
//     return { type: DECREMENT };
// };