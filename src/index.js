import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// import AppOld from './AppOld'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/lib/integration/react"
import configureStore from './redux/configureStore'
import * as serviceWorker from './serviceWorker';

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faPaypal} from '@fortawesome/free-brands-svg-icons'
library.add(fas, faPaypal)

// could have just imported but set it up this way in case we ever want to pass an initial state into the configureStore to override the defaults in each feature slice
const [store, persistor] = configureStore()


//https://github.com/hshoff/vx/pull/456/files?file-filters%5B%5D=.js
/*
const PASSIVE_EVENTS = ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'wheel'];

const checkType = (type, options) => {
  if (!PASSIVE_EVENTS.includes(type)) return null;

  const modOptions = {
    boolean: {
      capture: options,
      passive: false,
    },
    object: {
      ...options,
      passive: false,
    },
  };

  return modOptions[typeof options];
};

const addEventListener = document.addEventListener.bind();
document.addEventListener = (type, listener, options, wantsUntrusted) => {
  type === 'wheel' && console.log(options, checkType(type, options))
  return addEventListener(type, listener, checkType(type, options) || options, wantsUntrusted)
};

const removeEventListener = document.removeEventListener.bind();
document.removeEventListener = (type, listener, options) => (
  removeEventListener(type, listener, checkType(type, options) || options)
);
*/

ReactDOM.render(
  <>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading1={<div>loading from persistor...</div>}>
      <App/>
    </PersistGate>
  </Provider>
  {/*<div className="AppOld"><AppOld/></div>*/}
  </>
  ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
