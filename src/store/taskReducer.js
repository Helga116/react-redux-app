import * as actions from "./actionTypes";

export function taskReducer(state, action) {
    switch (action.type) {
        case actions.taskUpdated: {
            const newArray = [...state];
            const elementIndex = newArray.findIndex(
                (el) => el.id === action.payload.id
            );
            newArray[elementIndex] = {
                ...newArray[elementIndex],
                ...action.payload
            };
            return newArray;
        }
        case action.taskDeleted: {
            const newArray = [...state];
            const elementIndex = newArray.findIndex(
                (el) => el.id === action.payload.id
            );
            const newArraySplised = newArray.splice(
                elementIndex,
                1
            );
            return newArraySplised;
        }

        default:
            return state;
    }
}
