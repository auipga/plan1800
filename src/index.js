import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import AppOld from './AppOld'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/lib/integration/react"
import configureStore from './redux/configureStore'

// could have just imported but set it up this way in case we ever want to pass an initial state into the configureStore to override the defaults in each feature slice
const [store, persistor] = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={'loading from persistor...'}>
      <App/>
      {/*<AppOld/>*/}
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
