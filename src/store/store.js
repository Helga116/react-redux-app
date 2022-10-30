import { createStore } from "redux";
import { taskReducer } from "./taskReducer";

// сам store, точнее его создание с начальным состоянием
const initialState = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false }
];
export function initiateStore() {
    return createStore(taskReducer, initialState);
}
