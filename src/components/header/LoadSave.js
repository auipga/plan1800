import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import storage from "localforage"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Button, TabPane} from "reactstrap"

import PopoverWithTabs from "../global/PopoverWithTabs";
// import ImportButton from "./ImportButton";
import ExportButton from "./ExportButton";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";

import {blur, delay} from "../../functions/helpers";
import {text_plan, text_plan_ucf} from "../../data/translation/texts";
import track from "../../functions/tracking";
import SaveCloseButton from "./SaveCloseButton";


const LoadSave = () => {
  const id = 'LoadSave'
  const withLabel = true

  const tabs = [
    {
      name: "Load",
      icon: 'file',
      hidden: false
    },
  ]

  const nameOfMatch = useSelector(state => state.personal.nameOfMatch) || "" /*todo: || entfernen #compat*/
  const module = useSelector(state => state.personal.module)
  const inGame = module === "islands"
  useEffect(() => setName(nameOfMatch) && setSelection(nameOfMatch), [nameOfMatch])

  const [options, setOptions] = useState([])
  const [name, setName] = useState("")
  const [selection, setSelection] = useState()

  const dispatch = useDispatch()

  if (tabs.find(t => !t.hidden) === undefined) {
    return <></>
  }

  const reloadSavegames = (select = null) => {
    storage.keys().then(storageKeys => {
      const options = storageKeys.filter(o => o !== 'persist:root')
      setOptions(options)
      setSelection((select ? 'save_' + select : null) || "")
    })
  }

  const load = e => {
    document.body.click()
    dispatch({type: 'IO_GAME_leave'})

    delay(50).then(() => {
      track.data('Load')
      storage.getItem(selection).then(jsonAsObject => jsonAsObject instanceof Object && dispatch({type: 'STATE_LOAD', payload: {jsonAsObject}}))
    })
  }
  const trash = e => {
    blur(e)
    if (window.confirm(text_plan('delete-save', selection.replace("save_", "")))) {
      track.data('Delete')
      storage.removeItem(selection).then(value => reloadSavegames())
    }
  }
  const handleChange = e => {
    setSelection(e.target.value)
  }
  const handleChangeName = e => {
    setName(e.target.value)
  }


  return (<div className={'PopoverWithTabsWrap ' + id}>
      <Button id={'popover_' + id} type='button' className='mr-2' color='secondary'>
        <FontAwesomeIcon icon='save' fixedWidth />
        {/*<FontAwesomeIcon icon='folder-open' fixedWidth />*/}
        <FontAwesomeIcon icon='caret-down' />
      </Button>
      <PopoverWithTabs id={id} tabs={tabs} placement='bottom-end' openCallback={reloadSavegames}>
        {/*
        <TabPane tabId="Save">

          <div>
            <div className='mb-2'>
              <div>
                <input type='radio' name='save' value={'save_as'} onChange={handleChange} />
                <input type='text' name='name' placeholder='Speichern als' onFocus={() => setSelection('save_as')}/>
              </div>

              {options.map(save => (
                <label htmlFor={save} key={save}>
                  <input type='radio' name='save' value={save} id={save} onChange={handleChange}/> {save.replace("save_", "")}
                </label>
              ))}
            </div>
          </div>
        </TabPane>
*/}
        <TabPane tabId="Load">
          <div className='description variant1'>{text_plan('opened-game')}:</div>

          <div>
            {/*{nameOfMatch === "" && <div className='small'>Starte zuerst ein neues, öffne ein gesichertes <br/> oder importiere ein heruntergeladenes Spiel.</div>}*/}
            {/*{nameOfMatch === "" || <>*/}
              <div className='mb-2'>
                <input
                  type='text' name='plangamename' className='form-control form-control-sm'
                  value={name} onChange={handleChangeName}
                  disabled={!inGame}
                  placeholder={!inGame ? text_plan('no-opened-game') : text_plan('give-name')} title={text_plan('gamename')}/>
              </div>
              <SaveButton
                size='sm' withLabel={withLabel}
                callback={reloadSavegames}
                name={name.replace("save_", "")}
              />
              {/*<FontAwesomeIcon icon="question-circle" title={'Speichern ist nur notwendig, wenn\ndu zwischen Spielständen wechseln\noder Backups anlegen möchtest'} className='text-muted mr-2'/>*/}
              <ResetButton size='sm' withLabel={withLabel} disabled={!inGame}/>
              <SaveCloseButton
                size='sm' withLabel={false}
                callback={reloadSavegames}
                name={name.replace("save_", "")}
              />
            {/*</>}*/}

            <hr/>
            <div className='description variant1'>{text_plan('saved-savegames')} ({options.length}):</div>

            <div className='mb-2'>
              <select value={selection} onChange={handleChange} className='form-control form-control-sm' disabled={!options.length} required>
                <option value="" disabled hidden>{text_plan(options.length ? 'select...' : 'no-savegames')}</option>
                {options.map(save => <option key={save} value={save}>{save.replace("save_", "")}</option>)}
              </select>
            </div>

            <div>
              <Button onClick={load} color={'secondary'} className='mr-2' size='sm' disabled={!selection} title={withLabel ? false : text_plan_ucf('load')}>
                <FontAwesomeIcon icon="check"/> {withLabel && text_plan_ucf('load')}
              </Button>

              <Button onClick={trash} color={'secondary'} size='sm' disabled={!selection} title={withLabel ? false : text_plan_ucf('trash')}>
                <FontAwesomeIcon icon="trash-alt"/> {withLabel && text_plan_ucf('trash')}
              </Button>
            </div>

            <hr/>
            {/*<div className='description'>Sicherung</div>*/}
            <ExportButton size='sm' withLabel={withLabel} disabled={nameOfMatch===""}/>
            {/*<ImportButton size='sm' withLabel={withLabel}/>*/}

            {/*<hr/>*/}
            {/*<div className='description'>Schließen</div>*/}
            {/*<ResetButton size='sm' withLabel={withLabel} disabled={nameOfMatch===""}/>*/}

          </div>
        </TabPane>
      </PopoverWithTabs>
    </div>
  )
}

export default LoadSave