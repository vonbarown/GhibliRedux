import { INCREMENT, DECREMENT } from "./actionsTypes";

export const incrementCount = () => {
    return { type: INCREMENT };
};

export const decrementCount = () => {
    return { type: DECREMENT };
};