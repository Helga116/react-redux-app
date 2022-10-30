import * as actionTypes from "./actionTypes";

//чистые функции, которые отправляет dispatch, сущности actions с type и payload с измененным статусом
export function taskCompleted(id) {
    return {
        type: actionTypes.taskUpdated,
        payload: { id, completed: true }
    };
}

export function titleChanged(id) {
    return {
        type: actionTypes.taskUpdated,
        payload: { id, title: `New title for ${id}` }
    };
}

export function taskDeleted(id) {
    return {
        type: actionTypes.taskDeleted,
        payload: { id }
    };
}
