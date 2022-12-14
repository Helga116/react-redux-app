import { createStore, compose, applyMiddleware } from "redux";
import { logger } from "./middleware/logger";
import { thunk } from "./middleware/thunk";
import taskReducer from "./task";

// сам store, точнее его создание с начальным состоянием

const middlewareEnhancer = applyMiddleware(logger, thunk);

function configureStore() {
    return createStore(
        taskReducer, compose(middlewareEnhancer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
}
export default configureStore;
