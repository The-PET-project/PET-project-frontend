import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import authSaga from "../services/sagas/auth_saga";
import entryProcessReducer from "./slices/entry_process_slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { entryProcess: entryProcessReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(authSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
