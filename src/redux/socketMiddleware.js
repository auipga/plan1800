import io from "socket.io-client";


export const ioConnect       = (host) => ({ type: 'IO_CONNECT', payload: {host} });
// export const ioConnecting    = (onlineToken) => ({ type: 'personal/upsert', payload: {onlineWsState: 1, onlineToken, onlineClientId: null} });
export const ioConnecting    = () => ({ type: 'personal/upsert', payload: {onlineWsState: 1, onlineClientId: null} });
export const ioConnected     = (onlineClientId) => ({ type: 'personal/upsert', payload: {onlineWsState: 2, onlineClientId, onlineAutoConnect: true} });
export const ioStartFailed   = () => ({ type: 'personal/upsert', payload: {onlineWsState: 3} });
export const ioStarting      = () => ({ type: 'personal/upsert', payload: {onlineWsState: 4} });
export const ioStarted       = () => ({ type: 'personal/upsert', payload: {onlineWsState: 5, onlineAutoRejoin: true} });
export const ioDisconnect    = () => ({ type: 'IO_DISCONNECT' });
export const ioDisconnected  = () => ({ type: 'personal/upsert', payload: {onlineWsState: 0, onlineClientId: null} });




const socketMiddleware = () => {
  let socket = null;

  const doDisconnect = (store, reason) => {
    console.log('doDisconnect');
    // store.dispatch(ioDisconnect())

    if (socket !== null) {
      socket.close();
    }
    socket = null;

    store.dispatch(ioDisconnected())
    console.log('io closed, reason:', reason);
  }

  const doConnect = (store, host, onConnectCallback) => {
    console.log('doConnect')
    if (socket !== null && socket.connected) {
      console.log('already connected');
      return;
    }

    store.dispatch(ioConnecting())

    // connect to the remote host
    socket = io(host || `http://${document.location.hostname}:4000/`)

    // websocket handlers
    socket.on('connect', onConnect(store, onConnectCallback))
  }

  const onConnect = (store, callback) => () => {
    console.log('onConnect')
    store.dispatch(ioConnected(socket.id));

    socket.on('disconnect', onDisconnect(store))

    const personal = store.getState().personal
    if (personal.onlineAutoRejoin) {
      doStart('quick_rejoin', store, {token: personal.onlineToken})
    }
    else if (callback !== undefined) {
      callback()
    }
  }

  const doStart = (hostOrJoin, store, payload) => {
    console.log('doStart', hostOrJoin);
    if (!payload.token) {
      console.log('payload.token is empty!');
      return
    }
    const emits = {
      host: 'create',
      join: 'join',
      quick_rejoin: 'quick rejoin',
    }
    store.dispatch(ioStarting())
    socket.emit(emits[hostOrJoin], JSON.stringify({token: payload.token}), response => {
      if (response.hasOwnProperty('error')) {
        console.log(response);
        store.dispatch({type: 'personal/upsert', payload: {onlineAutoRejoin: false}})
        store.dispatch(ioStartFailed());
      } else {
        console.log('doStart', 'success');
        store.dispatch(ioStarted());

        socket.on('action', (a) => a.source !== socket.id ? store.dispatch(a) : console.log('skipping own action'))//todo remove falls nicht auftritt
        socket.on('request game state', (data) => {
          const fullState = store.getState()
          const {personal, _persist, ...filteredState} = fullState                                 // personal sichern, _persist verwerfen
          const {nameOfMatch, module, worldId, islandId, islandIds, onlineToken} = personal        // relevante personal holen
          const mergePersonal = {nameOfMatch, module, worldId, islandId, islandIds, onlineToken}   // relevante personal bauen
          const state = {...filteredState, personal: mergePersonal}                                // state und relevante personal
          socket.emit('game state', JSON.stringify({requester: data.requester, state}))
        })
        socket.on('game state', data => {
          if (data.hasOwnProperty('error')) {
            console.log(data)
            alert('game state ERROR')
            // setConState('ERROR')
          } else {
            store.dispatch({type: 'STATE_LOAD', payload: {jsonAsObject: data.state}})
            // setConState('LOADED')
          }
        })
      }
    })
  }
  const doLeave = (store) => {
    store.dispatch(ioStartFailed()) // same as left
    if (socket) {
      socket.emit('leave')
      socket.off('action')
      socket.off('request game state')
      socket.off('game state')
    }
  }

  const onDisconnect = store => () => {
    console.log('onDisconnect')
    store.dispatch(ioDisconnected())
    socket.off('disconnect')
    console.log('io closed, reason:', 'disconnect');
  }


  // the middleware part of this function
  return store => next => action => {
    if (action.type.startsWith('IO_')) {
      if ('IO_CONNECT' === action.type) {
        if (socket !== null && socket.connected) {
          doDisconnect(store, 'IO_CONNECT')
        }
        doConnect(store, action.payload.host)
      }
      else if ('IO_DISCONNECT' === action.type) {
        doDisconnect(store, 'IO_DISCONNECT')
      }
      else if (action.type.startsWith('IO_GAME')) {
        // geht nicht wegen async:
        // doConnect(store, action)
       /* if (!socket) {
          console.log('no socket')
          return
        }*/
        if ('IO_GAME_quick_start' === action.type) {
          socket.emit('quick start', JSON.stringify({token: action.payload.token}), response => {
            if (response.hasOwnProperty('error')) {
              // setConState(null)
            } else {
              // setConState('CONNECTED...')
            }
          })
        }
        else if ('IO_GAME_host' === action.type) {
          const start = () => doStart('host', store, action.payload)

          const personal = store.getState().personal
          if (!socket || personal.onlineWsState === 0) {
            doConnect(store, action.payload.host, start)
          } else {
            start()
          }
        }
        else if ('IO_GAME_join' === action.type) {
          const start = () => doStart('join', store, action.payload)

          const personal = store.getState().personal
          if (!socket || personal.onlineWsState === 0) {
            doConnect(store, action.payload.host, start)
          } else {
            start()
          }

          // socket.on('join response', (request) => { //todo  .once() ?
          //   console.log(request);
          //   const allow = JSON.parse(request);
          //   if (allow) {
          //     setConState('ACCEPTED')
          //     socket.emit('join', JSON.stringify({token}))
          //   } else {
          //     setConState('NOT ACCEPTED')
          //   }
          // })
        }
        else if ('IO_GAME_leave' === action.type) {
          doLeave(store)
        }
      }
    }
    // default
    else {
      // console.log('the next action:', action);
      if (action.hasOwnProperty('toSocket') && action.toSocket === true) {
        const {type, payload} = action
        socket.emit('action', JSON.stringify({type, payload}))
      }

      next(action);
      // console.log(!!socket, action)
      const personal = store.getState().personal
      if (socket && personal.onlineWsState === 5 && personal.onlineClientId) {
        if (!action.source && !action.isAsync && !action.type.startsWith('STATE_') && !action.type.startsWith('personal/')) {
          socket.emit('action', JSON.stringify(action))
        }
      }
    }
    switch (action.type) {
      case 'IO_CONNECT':
        break;
      case 'IO_DISCONNECT':
        break;
      case 'IO_GAME_quick_start':
        break;
      default:

    }
  };
};

export default socketMiddleware;
