import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { logger } from "redux-logger";
import myReducer from "./reducer";

let myStore = createStore(myReducer, applyMiddleware(logger));

export default myStore;
