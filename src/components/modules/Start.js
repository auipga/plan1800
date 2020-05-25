import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Button, Row, Col, Input} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ImportButton from "../header/ImportButton";

import addons from "../../data/addons";
import {text_plan, text_plan_ucf} from "../../data/translation/texts";
import {blur} from "../../functions/helpers";
import track from "../../functions/tracking";
import * as personalSlice from "../../features/personalSlice";
import ConvertButton from "../header/ConvertButton";


const Start = () => {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    name: '',
    ...addons.dlcs.map(dlc => ({[dlc.text]: false}))
  })

  const [name, setName] = useState("")
  const handleChangeName = e => {
    upsert({name: e.target.value})
    setName(e.target.value)
  }
  const upsert = (attrs) => {
    setState({...state, ...attrs})
  }

  const start = () => {
    if (name.trim().length===0) {
      document.getElementById('plangamename').focus()
    } else {
      track.data('Start new game')
      dispatch(personalSlice.upsert({nameOfMatch: name.trim()}))
      dispatch(personalSlice.upsert({module: 'islands'}))
    }
  }

  const toggleDLC = dlc => {
    upsert({[dlc.text]: !state[dlc.text]})
  }
  const button = (dlc) => <Button
    className='mr-2 mb-2'
    disabled={true}
    active={state[dlc.text]}
    onClick={() => toggleDLC(dlc)}
    title={text_plan(dlc.text)}
  >
    <img src={'./icons/dlcs/'+dlc.fileName} alt=""/>
  </Button>



  const token             = useSelector(state => state.personal.onlineToken)
  const handleTokenChange = e => {
    dispatch({type: 'personal/upsert', payload: {onlineToken: e.target.value}})
  }
  const handleJoin = e => {
    blur(e)
    if (token.trim().length===0) {
      document.getElementById('cooptoken').focus()
    } else {
      track.coop('Join')
      dispatch({type: 'IO_GAME_join', payload: {token}})
    }
  }

  return (
      <Row>
        <Col lg={6} xl={4} className='order-xl-3 order-lg-2'>
          <div className="jumbotron border border-info text-center">
            <h2 className="">{text_plan_ucf('start-start-new-header')}</h2>
            <hr/>

            <div title={text_plan_ucf('coming-soon')} className='c-progress d-none'>
              <div>{addons.dlcs.filter(dlc => dlc.seasonPass === false).map(button)}</div>

              {addons.seasonPasses.filter(sp => sp.available).map(sp => (
                <div>{addons.dlcs.filter(dlc => dlc.available === true && dlc.seasonPass === sp.id).map(button)}</div>
              ))}
            </div>

            <p>
              <input
                type='text' name='plangamename' className='form-control mx-auto mb-2 text-center'
                style={{width: 280}}
                id='plangamename'
                value={name} onChange={handleChangeName}
                placeholder={text_plan_ucf('no-gamename')} title={text_plan_ucf('gamename')} required/>
              <hr/>
              <Button
                color="primary" size='lg'
                onClick={start}
              >{text_plan_ucf('start')}</Button>
              {/*<Button onClick={funnyName} color="secondary">Lustigen Namen</Button>*/}
            </p>
          </div>
        </Col>

        <Col lg={6} xl={4} className='order-xl-2 order-lg-1'>
          <div className="jumbotron border border-info text-center">
            <h2 className="">{text_plan_ucf('start-load-existing-header')}</h2>
            <hr/>

            <p>
              <ImportButton size='md' withLabel={true} withHint={true}/>
            </p>

            <p>
              <ConvertButton size='md' withLabel={true} withHint={true}/>
            </p>
          </div>
        </Col>

        <Col lg={6} xl={4} className='order-xl-1 order-lg-3'>
          <div className="jumbotron border border-info text-center">
            <h2 className="">Multiplayer</h2>
            <hr/>

            <p>
              <Input
                type='text' name='uuid' className='form-control uuid mx-auto mb-3 text-center'
                id='cooptoken'
                value={token}
                onChange={handleTokenChange}
                placeholder={text_plan_ucf('teamtoken')}/>
              <hr/>
              <Button
                className='mr-2' size='lg'
                onClick={handleJoin}
              >
                <FontAwesomeIcon icon='sign-in-alt' /> {text_plan_ucf('join')}
              </Button>
            </p>
          </div>
        </Col>
      </Row>
  )
}

export default Start