import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
    titleChanged,
    taskDeleted,
    completeTask,
    getTasks
} from "./store/task";
import configureStore from "./store/store";

const store = configureStore();
const App = (params) => {
    // задаем состояние для отображения нашего state, который мы получаем из хранилища store
    const [state, setState] = useState(store.getState());
    //
    useEffect(() => {
        store.dispatch(getTasks());
        store.subscribe(() => {
            setState(store.getState());
        });
    }, []);

    // const completeTask = (taskId) => {
    //     store.dispatch((getState, dispatch) => {
    //         console.log(dispatch);
    //         console.log(getState);
    //         store.dispatch(taskCompleted(taskId));
    //     });
    // };
    const changeTitle = (taskId) => {
        store.dispatch(titleChanged(taskId));
    };
    const deleteTask = (taskId) => {
        store.dispatch(taskDeleted(taskId));
    };

    return (
        <>
            <h1>App</h1>

            <ul>
                {state.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{`Completed: ${el.completed}`}</p>
                        <hr />
                        <button
                            onClick={() => store.dispatch(completeTask(el.id))}
                        >
                            Complete
                        </button>
                        <button onClick={() => changeTitle(el.id)}>
                            Change Title
                        </button>
                        <button onClick={() => deleteTask(el.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        {/* <React.StrictMode> */}
            <App />
        {/* </React.StrictMode> */}
    </>
);
