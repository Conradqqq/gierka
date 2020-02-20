import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";
import reduxImmatableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancer(applyMiddleware(reduxImmatableStateInvariant()))) // add support for Redux dev tools);
}