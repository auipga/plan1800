import React, {useState} from 'react'
import {useDispatch, useSelector, useStore} from "react-redux";

import {Button, TabPane} from "reactstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PopoverWithTabs from "../global/PopoverWithTabs";

import * as debugSlice from "../../features/debugSlice";


const Debug = () => {
  const id = 'Debug'

  const debug = useSelector(state => state.debug)

  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const key = e.target.name
    let value = e.target.value

    const d = debug.find(d => d.key === key)
    console.log({key, value, d});
    if (d.type === "checkbox") {
      value = e.target.checked
      console.log({value})
    } else if (d.type === 'number') {
      value = parseInt(value)
    }

    dispatch(debugSlice.set({key, value}))
  }
  const handleAdd = (e) => {

    console.log({key, value});

    dispatch(debugSlice.set({key, value}))
  }
  const handleRemove = (e) => {
    dispatch(debugSlice.destroy({key: e.currentTarget.id.replace('DEBUG__','')}))
  }


  const tabs = [
    {
      name: "Show/Hide",
      icon: 'eye-slash',
      // hidden: false
    },

  ]

  if (tabs.find(t => !t.hidden) === undefined) {
    return <></>
  }


  return (<div className={'PopoverWithTabsWrap ' + id}>
    <Button id={'popover_' + id} type='button' className=''>
      <FontAwesomeIcon icon='bug' fixedWidth/>
    </Button>
    <PopoverWithTabs id={id} tabs={tabs} placement='bottom-start'>
      <TabPane tabId="Show/Hide">
        <p>
          <input value={key} onChange={(e) => setKey(e.target.value)}/>
          <input value={value} onChange={(e) => setValue(e.target.value)}/>
          <button onClick={handleAdd}><FontAwesomeIcon icon='plus'/></button>
        </p>

        {debug.map(d => {
          const label = <span>{d.key}</span>
          const input = <input type={d.type} name={d.key} value={d.value} onChange={handleChange}/>
          let element = <>{input}{label}</>

          if (d.type === 'bool') {
            element = <>{label}{input}</>
          }

          return (
            <div>
              <label>{element}</label>
              <button onClick={handleRemove} id={'DEBUG__'+d.key}><FontAwesomeIcon icon='trash'/></button>
            </div>
          )
        })}
      </TabPane>
    </PopoverWithTabs>
  </div>)
}

export default Debug