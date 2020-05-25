import {configureStore} from "@reduxjs/toolkit"
import {persistStore} from "redux-persist"

// import {getDefaultMiddleware} from "@reduxjs/toolkit";
// import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist"

import rootReducer from "../reducers"
import asyncDispatchMiddleware from "./asyncDispatchMiddleware";
import socketMiddleware from "./socketMiddleware";

const middleware = [
  // ...getDefaultMiddleware(),
  socketMiddleware(),
  asyncDispatchMiddleware
]
const configStore = (preloadedState=undefined) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware,
    // middleware: getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    //   }
    // })
  })
  const persistor = persistStore(store)

  return [store, persistor]
}

export default configStore
