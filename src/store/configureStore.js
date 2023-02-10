import createSagaMiddleware from "@redux-saga/core";
import { compose, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducer from "./reducers";
import rootSaga from "./rootSaga";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  composeEnhancers,
  middleware: (gDM) => gDM().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga)
export default store;
