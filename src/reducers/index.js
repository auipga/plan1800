import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "localforage";

import residenceSlice from "../features/residenceSlice";
import itemCollectionSlice from "../features/itemCollectionSlice";
import areaSlice from "../features/areaSlice";
import islandSlice from "../features/islandSlice";
import personalSlice from "../features/personalSlice";
import producerSlice from "../features/producerSlice";
import cultureSlice from "../features/cultureSlice";
import debugSlice from "../features/debugSlice";
import throughputSlice from "../features/throughputSlice";
import balanceSlice from "../features/balanceSlice";
import productivitySlice from "../features/productivitySlice";
import producerSumSlice from "../features/producerSumSlice";
import routesSlice from "../features/routesSlice";
import sharingSlice from "../features/sharingSlice";

import track from "../functions/tracking";
import {update2020_12_26, update2020_12_27, update2020_12_27_2, update2020_12_28} from "../functions/game_convert";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: [
  //   "residences",
  //   "autoIncrements",
  //   "itemCollections",
  // ]
}
const rootReducer = combineReducers({

  islands: islandSlice.reducer,
  areas: areaSlice.reducer,

  residences: residenceSlice.reducer,

  producers: producerSlice.reducer,
  producerSums: producerSumSlice.reducer,
  productivity: productivitySlice.reducer,
  throughput: throughputSlice.reducer,
  balance: balanceSlice.reducer,
  routes: routesSlice.reducer,
  sharings: sharingSlice.reducer,

  itemCollections: itemCollectionSlice.reducer,
  culture: cultureSlice.reducer,

  debug: debugSlice.reducer,
  personal: personalSlice.reducer,
  // workforce: workforceAreaSlice.reducer,
});


const wrappedRootReducer = (state, action) => {
  const prefix = (name = 'unnamed') => 'save_' + name

  if (action.type === 'STATE_RESET') {
    state = {
      personal: {
        ...state.personal,
        nameOfMatch: '',
        module: 'start',
        worldId: 1,
        islandId: null,
        islandIds: {1:null, 2:null, 3:null, 4:null},
        collapsed: [],
        version: {GU: 9.2, date: "2020-12-27"},
      }
    }
    track.data('Reset')
  }
  if (action.type === 'STATE_SAVE_AS') {
    // const {personal, ...filteredState} = state
    // storage.setItem(prefix(action.payload.name), filteredState).then()
    storage.setItem(prefix(action.payload.name), state).then()
    track.data('Saved')
  }
  if (action.type === 'STATE_LOAD') {
    const {jsonAsString, jsonAsObject} = action.payload
    const {personal, debug} = state
    const loadedState = jsonAsObject || JSON.parse(jsonAsString)
    const {personal: mergePersonal, oldDebug, ...filteredState} = loadedState

    state = {...filteredState, personal: {...personal, ...mergePersonal}, debug}
    // state = {...loadedState}
    track.data('Loaded')

    // apply updates
    if (!mergePersonal.hasOwnProperty('version')) {
      update2020_12_26(state)
    }
    if (state.personal.version.date === "2020-12-26") {
      update2020_12_27(state)
    }
    if (state.personal.version.date === "2020-12-27") {
      update2020_12_27_2(state)
    }
    if (state.personal.version.date === "2020-12-27_2") {
      update2020_12_28(state)
    }

  }
  return rootReducer(state, action);
};
export default persistReducer(persistConfig, wrappedRootReducer)
