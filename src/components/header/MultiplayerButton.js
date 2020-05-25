/* eslint-disable no-unused-vars */
import React, {memo, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {Button, TabPane, Input, InputGroup, InputGroupAddon} from "reactstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import PopoverWithTabs from "../global/PopoverWithTabs";

import {blur, uuidPiece} from "../../functions/helpers";
import {ioConnect, ioDisconnect, ioDisconnected} from "../../redux/socketMiddleware";
import {text_plan, text_plan_ucf} from "../../data/translation/texts";
import track from "../../functions/tracking";


const MultiplayerButton = () => {
  const id = 'MultiplayerButton'

  const tabs = [
    {
      name: "Connect",
      icon: 'connect',
      hidden: false
    },
  ]

  // const nameOfMatch = useSelector(state => state.personal.nameOfMatch) || "" //todo: || entfernen #compat
  const module            = useSelector(state => state.personal.module)
  const token             = useSelector(state => state.personal.onlineToken)
  const onlineWsState     = useSelector(state => state.personal.onlineWsState)
  const onlineAutoConnect = useSelector(state => state.personal.onlineAutoConnect)
  const onlineAutoRejoin  = useSelector(state => state.personal.onlineAutoRejoin)

  useEffect(() => {
    dispatch(ioDisconnected())

    // console.log({token, onlineWsState, onlineAutoConnect, onlineAutoRejoin})
    if (false && onlineAutoConnect) {
      console.log('IO_CONNECT (autoReconnect, useEffect)')
      dispatch(ioConnect())
    }
    else if (onlineAutoRejoin) {
      track.coop('AutoRejoin')
      dispatch({type: 'IO_GAME_join', payload: {token}})
      // dispatch({type: 'personal/upsert', payload: {onlineAutoRejoin: false}})
    }
    return () => {
      if (onlineWsState >= 2) {
        console.log('IO_DISCONNECT')
        dispatch(ioDisconnect())
      }
      track.game('User left')
    };
    // eslint-disable-next-line
  }, []);


  const dispatch = useDispatch()
  const handleTokenChange = e => {
    dispatch({type: 'personal/upsert', payload: {onlineToken: e.target.value}})
  }
  const handleTokenGenerate = e => {
    track.coop('Token generated')
    dispatch({type: 'personal/upsert', payload: {onlineToken: uuidPiece()}})
  }
  const handleConnect = e => {
    blur(e)
    const host = e.shiftKey ? 'http://localhost:4000/' : (e.ctrlKey ? 'http://manueltransfeld.de:4000/' : undefined)
    console.log('IO_CONNECT (by button)')
    dispatch(ioConnect(host))
  }
  const handleDisconnect = e => {
    blur(e)
    console.log('IO_DISCONNECT (by button)')
    dispatch(ioDisconnect())
    dispatch({type: 'personal/upsert', payload: {onlineAutoConnect: false, onlineAutoRejoin: false}})
  }
  const handleChangeReconnect = e => {
    dispatch({type: 'personal/upsert', payload: {onlineAutoConnect: e.currentTarget.checked}})
  }
  const handleChangeRejoin = e => {
    dispatch({type: 'personal/upsert', payload: {onlineAutoRejoin: e.currentTarget.checked}})
  }
  const handleQuickStart = e => {
    blur(e)
    dispatch({type: 'IO_GAME_quick_start', payload: {token}})
  }
  const handleHost = e => {
    blur(e)
    track.coop('Host')
    const host = e.shiftKey ? 'http://localhost:4000/' : (e.ctrlKey ? 'http://manueltransfeld.de:4000/' : undefined)
    dispatch({type: 'IO_GAME_host', payload: {token, host}})
  }
  const handleJoin = e => {
    blur(e)
    track.coop('Join')
    const host = e.shiftKey ? 'http://localhost:4000/' : (e.ctrlKey ? 'http://manueltransfeld.de:4000/' : undefined)
    dispatch({type: 'IO_GAME_join', payload: {token, host}})
  }
  const handleLeave = e => {
    blur(e)
    track.coop('Leave')
    dispatch({type: 'personal/upsert', payload: {onlineAutoRejoin: false}})
    dispatch({type: 'IO_GAME_leave', payload: {token}})
  }

  const circleColor = (state) => {
    const colors = [
      'var(--red)',
      'var(--yellow)',
      'var(--success)',
    ]
    return colors[Math.max(0, Math.min(2, state))]
  }

  if (tabs.find(t => !t.hidden) === undefined) {
    return <></>
  }


  return (<div className={'PopoverWithTabsWrap ' + id}>
      <Button id={'popover_' + id} type='button' className='mr-2' color='secondary' title={onlineWsState}>
        {/*{onlineWsState}*/}
        <FontAwesomeIcon icon='users' fixedWidth color={onlineWsState>=3 ? circleColor(onlineWsState-3):null} />
        {/*<FontAwesomeIcon icon='circle' fixedWidth size='xs' color={circleColor(onlineWsState)}/>*/}
       {/* {onlineWsState>=3 &&
        <FontAwesomeIcon icon='circle' fixedWidth size='xs' color={circleColor(onlineWsState-3)}/>
        }*/}
        {/*<FontAwesomeIcon icon={onlineWsState ? 'circle' : 'dot-circle'}  spin={!onlineWsState} color={onlineWsState ? 'var(--success)' : 'var(--red)'} />*/}
        {/*<FontAwesomeIcon icon='wifi' color={onlineWsState > 0 ? 'var(--success)' : 'var(--red)'} />*/}
        <FontAwesomeIcon icon='caret-down' className='ml-1'/>
      </Button>
      <PopoverWithTabs id={id} tabs={tabs} placement='bottom-end' openCallback={null}>
        <TabPane tabId="Connect">

          {/*<div className='mb-2'>
            <div className='description'>Coop-Server</div>
          </div>*/}

          <div className='mb-2 d-none'>
            <div className='description'>Coop-Server</div>

            <Button
              size='sm'
              className='mr-2'
              disabled={onlineWsState !== 0}
              onClick={handleConnect}
            >
              <FontAwesomeIcon icon='link' /> {text_plan_ucf('connect')}
            </Button>

            <Button
              size='sm'
              className='mr-2'
              disabled={onlineWsState === 0}
              onClick={handleDisconnect}
            >
              <FontAwesomeIcon icon='unlink' /> {text_plan_ucf('disconnect')}
            </Button>

            <label className={'mb-0 '+(onlineWsState < 2 ? 'text-muted' : '')}>
              <input type='checkbox' checked={onlineAutoConnect} disabled={onlineWsState < 2} onChange={handleChangeReconnect}/>
              Auto-connect
            </label>
          </div>

          {/*<hr/>*/}

          <div className='mb-2'>
            <div className='description'>Coop Token</div>

            <InputGroup size='sm'>
              <Input
                type='text' name='uuid' className='form-control form-control-sm uuid'
                value={token}
                onChange={handleTokenChange}
                // disabled={/*onlineWsState < 2 ||*/ onlineWsState > 3}
                readOnly={/*onlineWsState < 2 ||*/ onlineWsState > 3}
                onFocus={onlineWsState > 3 ? e=>e.target.select() : undefined}
                placeholder={text_plan_ucf('insert-token')} title={text_plan_ucf('teamtoken')}/>
              <InputGroupAddon addonType="append">
                <Button
                  title={text_plan_ucf('generate-token')}
                  onClick={handleTokenGenerate}
                  disabled={module === 'start' || /*onlineWsState < 2 ||*/ onlineWsState > 3}
                >
                  <FontAwesomeIcon icon='magic'/>
                </Button>
                {/*
                <Button
                  onClick={() => copyToClipboard(token)}
                  title='Kopieren'
                >
                  <FontAwesomeIcon icon='copy'/>
                </Button>*/}
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className='mb-2'>

            <Button
              size='sm'
              className='mr-2'
              disabled={module === 'start' || !token || /*onlineWsState < 2 ||*/ onlineWsState > 3}
              onClick={handleHost}
            >
              <FontAwesomeIcon icon='play-circle' /> Host
            </Button>

            <Button
              size='sm'
              className='mr-2'
              disabled={!token || /*onlineWsState < 2 ||*/ onlineWsState > 3}
              onClick={handleJoin}
            >
              <FontAwesomeIcon icon='sign-in-alt' /> Join
            </Button>

            <Button
              size='sm'
              className='mr-2'
              disabled={onlineWsState < 4}
              onClick={handleLeave}
            >
              <FontAwesomeIcon icon='sign-out-alt' /> Leave
            </Button>

            {/*<Button
              size='sm'
              className='mr-2'
              disabled={!token || onlineWsState !== 2}
              onClick={handleQuickStart}
            >
              <FontAwesomeIcon icon='play' /> Start
            </Button>*/}

{/*
            <label className={'mb-0 '+(!token || !onlineAutoConnect || onlineWsState < 5 ? 'text-muted' : '')}
            title='Wenn ein anderes Teammitglied online ist'>
              <input type='checkbox'
                     checked={onlineAutoRejoin}
                     onChange={handleChangeRejoin}
                     disabled={!token || !onlineAutoConnect || onlineWsState < 5}
              />
              Auto-rejoin
            </label>
*/}
          </div>

          <div className='mb-2 small text-muted' style={{maxWidth: 326}}
               dangerouslySetInnerHTML={{ __html: text_plan_ucf('coop-tutorial') }}
          />

        </TabPane>
      </PopoverWithTabs>
    </div>
  )
}

export default memo(MultiplayerButton)