import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {Button, TabPane} from "reactstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PopoverWithTabs from "../global/PopoverWithTabs";

import * as debugSlice from "../../features/debugSlice";

const debugKeys = [
  'keys',

  'show',

  'show_iconss',

  'show_productivity_percent',
  // 'show_balance_chart',
  // 'show_balance_value',
  'show_highlights',

  'show_planned_features',
  'show_some_ids',
  'show_world_labels',
  'show_unsupported_culture',

  'hide_BuildingContextMenu',
  'popover_no_close',
]

const Debug = () => {
  const id = 'Debug'

  const debug = useSelector(state => state.debug)
  const show = debug.includes('show')

  const [key, setKey] = useState('');

  const dispatch = useDispatch()
  const handleAdd = (e) => {
    if (typeof e === 'string') {
      dispatch(debugSlice.add(e))
    } else if (key)
      dispatch(debugSlice.add(key))
    setKey('')
  }
  const handleRemove = (e) => {
    dispatch(debugSlice.destroy(e.currentTarget.id.replace('DEBUG__', '')))
  }
  const handleToggle = (e) => {
    const key = e.currentTarget.value;
    debug.includes(key)
      ? dispatch(debugSlice.destroy(key))
      : dispatch(debugSlice.add(key))
  }


  const tabs = [
    {
      name: "Show/Hide",
      icon: 'eye-slash',
      hidden: !show
    },
    {
      name: "key",
      icon: 'key',
      hidden: false
    },

  ]

  if (tabs.find(t => !t.hidden) === undefined) {
    return <></>
  }


  return (<div className={'PopoverWithTabsWrap ' + id}>
    <Button id={'popover_' + id} type='button' className='mr-2 px-1 py-0' outline color='danger'>
      <FontAwesomeIcon icon='bug' fixedWidth/>
      <FontAwesomeIcon icon='caret-down' />
    </Button>
    <PopoverWithTabs id={id} tabs={tabs} placement='bottom-start'>
      <TabPane tabId="Show/Hide">
        <div className='description'>
          Show/Hide elements
        </div>
        {debugKeys.slice(1).filter(d => d.startsWith('show_')).map(d => (
          <div key={d}>
            <label className='mb-0'>
              <input type='checkbox' value={d} checked={debug.includes(d)} onChange={handleToggle}/>
              {d}{/*.replace('show_', '')*/}
            </label>
          </div>
        ))}
      </TabPane>
      <TabPane tabId="key">
        <p>
          <input
            value={key}
            style={{width: 150}}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleAdd(e)}
          />
          <button onClick={handleAdd}><FontAwesomeIcon icon='check'/></button>
        </p>

        <div className=''>
          <p>Hier bitte nichts machen, <br/>außer ich sage euch was.</p>
          <span onCopy={() => handleAdd('keys')}>Keys:</span>

          {debug.includes('keys') && (
            <ul>
              {debugKeys.slice(1).filter(d => !d.startsWith('show_')).map(d => (
                <li key={d} onDoubleClick={() => handleAdd(d)}>{d}</li>
              ))}
            </ul>
          )}
        </div>

        {debug.filter(d => !show || !d.startsWith('show_')).map(d => (
          <div key={d}>
            <button onClick={handleRemove} id={'DEBUG__' + d} className='mr-2 sm'>
              <FontAwesomeIcon icon='trash'/>
            </button>
            <span>{d}</span>
          </div>
        ))}
      </TabPane>
    </PopoverWithTabs>
  </div>)
}

export default Debug