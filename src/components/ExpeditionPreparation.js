import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types/'
import {Button, ButtonGroup, Input, Progress, Row, Col, Badge, CardHeader, CardBody} from 'reactstrap'
import worlds from "../data/worlds"
import producers from "../data/producers"
import allShips from "../data/ships"
import GoodMediaObject from "./GoodMediaObject"
// import items from "../data/items"
import MediaObject from "./MediaObject"
import KeyedMap from "../classes/KeyedMap"
import expedition_supplies from "../data/expedition_supplies"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import ExpeditionAdvise from "./ExpeditionAdvise"
import * as ex from '../functions/expeditions'
import {orDefault} from '../functions/helpers'
import classNames from 'classnames'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import InputWrapper from "./InputWrapper"
import {trans} from "../functions/translation"


function ExpeditionEmptySlot() {
  return (<div className='mb-1 mr-3 form-inline d-inline-block'>
    <MediaObject type={"expedition"} thing={"icon_new_setup"} mr={true} middle px={30}/>
    <Input
      bsSize='sm'
      className={"text-center"}
      style={{width: 50}}
      value={"x"}
      disabled={true}
    />
  </div>)
}

function ShipSelectButton(props) {
  const {ship} = props
  const caret = props.caret && <FontAwesomeIcon icon="caret-right" className='ml-1'/>
  return (
    <Button
      color={"secondary"}
      title={ship.key}
      style={{width: 76}}
      {...props}
    >
      <div className={classNames({'d-inline-block': props.vertical})}>
        <img src={"./icons/ships/" + ship.key + ".png"} alt={ship.key}/>
        {caret}
      </div>
      <div className={classNames({'d-inline-block': props.vertical})}>
        <span className='font-weight-bold'>{ship.slots.cargo}</span>
        |
        <span className='font-weight-bold'>{ship.slots.items}</span>
      </div>
      <div className={classNames({'d-inline-block': props.vertical})} style={{height: 30}}>
        {!props.simple && <img src={"./icons/expedition/ExpeditionNavigation.png"} alt={ship.key}/>}
        <span className={classNames({"text-muted": !ship.expeditionBonus.Navigation && props.simple})}>{ship.expeditionBonus.Navigation}</span>
      </div>
      <div className={classNames({'d-inline-block': props.vertical})} style={{height: 30}}>
        {!props.simple && <img src={"./icons/expedition/ExpeditionMight.png"} alt={ship.key}/>}
        <span className={classNames({"text-muted": !ship.expeditionBonus.Might && props.simple})}>{ship.expeditionBonus.Might}</span>
      </div>
    </Button>
  )
}

ShipSelectButton.propTypes = {ship: PropTypes.any}

const round = (number, precision) => {
  const factor = Math.pow(10, precision)
  return Math.round((number + Number.EPSILON) * factor) / factor
}

const ExpeditionPreparation = (props) => {
  const {expedition} = props

  const expType = orDefault(expedition.fixedType, expedition.type)
  const skulls = orDefault(expedition.fixedSkulls, expedition.skulls)
  const advises = orDefault(expedition.fixedAdvises, orDefault(expedition.advises, []))

  // useEffect(() => {
  //   console.log("useEffect props.expedition", props.expedition)
  //
  //   setExpedition(props.expedition)
  //   // setExpType(orDefault(fixed.type, 'expedition_generic'))
  //   // setSkulls(orDefault(fixed.skulls, 0))
  //   // setAdvises(orDefault(fixed.advises,[]))
  // }, [props.expedition])


  useEffect(() => {
    if (!props.preparation) {console.log("useEffect !props.preparation"); return}
    // console.log("useEffect props.preparation", props.preparation)
    setShip(orDefault(allShips.find(s => s.key === props.preparation.ship), ships.find(() => true)))
    setLoadedGoods(orDefault(props.preparation.loadedGoods,[]))
    setStartworld(orDefault(props.preparation.startworld,1))
    setShowAll(orDefault(props.preparation.showAll,false))
    setLoadedItems(orDefault(props.preparation.loadedItems,[]))
    setDirty(false)
  }, [props.preparation])

  useEffect(() => {
    if (!props.expedition) {alert("useEffect !props.preparation"); return}
    setEdit(forceEdit())
  }, [props.expedition.id])

  const forceEdit = () => expType === 'expedition_generic' || skulls === 0 || advises.length < 3
  const [edit, setEdit] = useState(forceEdit())
  const toggleEdit = () => {
    setEdit(!edit)
  }

  // show or hide goods of not yet unlocked producers
  const [showAll, setShowAll] = useState(false)
  const toggleShowAll = () => setShowAll(!showAll)

  // select a ship type
  const ships = allShips
    .filter(s => s.slots.cargo >= 2)
    .filter(s => showAll || props.allPopulation.ofTier(s.unlock.tierId) >= s.unlock.requirement)
  const [ship, setShip] = useState(ships.find(() => true))

  let [loadedGoods, setLoadedGoods] = useState([])
  const loadGood = (slotId, good, amount) => {
    if (slotId === null || loadedGoods[slotId] === undefined) {
      if (loadedGoods.length >= 6) {
        return
      }
      setLoadedGoods([...loadedGoods, {good: good, amount: amount}])
    } else {
      loadedGoods[slotId] = {good: good, amount: amount}
      setLoadedGoods([...loadedGoods])
    }
    setDirty(true)
  }
  const unloadGood = (slot) => {
    setLoadedGoods(loadedGoods.filter((f,key) => key !== slot))
    setDirty(true)
  }

  // const [loadedItems, setLoadedItems] = useState([...items.filter(i=>i.hasOwnProperty("ExpeditionAttribute")).slice(10,13)])
  const [loadedItems, setLoadedItems] = useState([])
  // eslint-disable-next-line
  const loadItem = (slotId, item) => {
    if (loadedItems.length >= 6) {
      return
    }
    if (slotId === null || loadedItems[slotId] === undefined) {
      setLoadedItems([...loadedItems, item])
    } else {
      loadedItems[slotId] = item
      setLoadedItems([...loadedItems])
    }
  }
  const unloadItem = (slot) => {
    setLoadedItems(loadedItems.filter((f,key) => key !== slot))
  }

  let [moraleByType] = useState(new KeyedMap(ex.bonusTypes, 0))
  let [skillByType] = useState(new KeyedMap(ex.skills, 0))

  const allGoodKeys = Object.keys(expedition_supplies)
  const expProducers = producers.filter(p => allGoodKeys.includes(p.provides))

  const [startworld, setStartworld] = useState(1)

  const goodsByType = type => {
    const socialClassIDs = worlds.find(w => w.id === startworld).socialClassIDs
    const all = expProducers.filter(p =>
      // only goods of this world
      (showAll || socialClassIDs.includes(p.tierId))
      // only unlocked producers
      && (showAll || props.unlockedProducers.includes(p.provides))
      // of that type
      && expedition_supplies[p.provides].hasOwnProperty(type)
    )
    const filteredKeys = all.map(p => p.provides).filter((v, i, a) => a.indexOf(v) === i)
    return filteredKeys.reduce((prev, next) => [...prev, all.find(p => p.provides === next)], [])
      .sort((a, b) => expedition_supplies[b.provides][type] - expedition_supplies[a.provides][type])
  }

  const calculateMorale = () => {
    const difficultyFactor = [undefined, 1, 1/4, 1/8][expedition.skulls]

    ex.bonusTypes.forEach(bonus => moraleByType.set(bonus, 0))
    ex.skills.forEach(skill => skillByType.set(skill, 0))

    Object.keys(ship.expeditionBonus).forEach(bonus => {
      // base morale by skill
      if (ex.advises.includes(bonus)) {
        moraleByType.plus(bonus, ship.expeditionBonus[bonus] * difficultyFactor)
      } else {
        // Perks
        moraleByType.plus("Base_morale", ship.expeditionBonus[bonus] * difficultyFactor)
      }
      // additional skill bonus
      if (advises.includes(bonus)) {
        moraleByType.plus("Base_morale", ship.expeditionBonus[bonus] * difficultyFactor)
      }

      if (ex.skills.includes(bonus)) {
        skillByType.plus(bonus, ship.expeditionBonus[bonus])
      }
    })

    loadedGoods.forEach(lg => {
      const definition = expedition_supplies[lg.good]
      const boni = Object.keys(definition)
      boni.forEach(bonus => {
        // base morale by skill
        moraleByType.plus(bonus, definition[bonus] * lg.amount / 50 * difficultyFactor)

        // additional skill bonus
        if (advises.includes(bonus) && bonus !== "Extra_rations") {
          moraleByType.plus("Skill_bonus", definition[bonus] * lg.amount / 50 * difficultyFactor)
        }

        if (ex.skills.includes(bonus)) {
          skillByType.plus(bonus, definition[bonus] * lg.amount / 50)
        }
      })
    })
  }

  calculateMorale()

  const [dirty, setDirty] = useState(false)
  const save = () => {
    update()
    setDirty(false)
  }

  const update = () => {
    props.update({
      advises: advises,
      ship: ship.key,
      loadedGoods: loadedGoods,
      loadedItems: loadedItems,
      startworld: startworld,
      showAll: showAll,
    })
  }
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)

  return (
    <>
      <CardHeader>
        <Row>
          <Col sm='auto'>
            {/* expType */}
            <Badge className={'mr-2 px-2'} pill>
              <img src={'./icons/expedition/Icon_' + expType + '.png'} alt={expType}/>
            </Badge>

            {/* difficulty selection */}
            <Badge className={'mr-2 px-2'} pill style={{width: 76, lineHeight: 2.4}}>
              {/*<img src={'./icons/expedition/ExpeditionSkulls'+skulls+'.png'} alt={skulls}/>*/}
              {Array(skulls).fill(<FontAwesomeIcon icon={'skull'} fixedWidth size='lg' />)}
            </Badge>

            {/* advises */}
            <Badge className={'mr-2 px-2'} pill>
              {advises.filter(a=>a!=="Extra_rations").map(type => (
                <img src={'./icons/expedition/Expedition'+type+'.png'} alt={type}/>
              ))}
            </Badge>
          </Col>
          <Col>
            {!edit && (
              <div className='hover-wrapper d-none'>
                {/*all morale */}
                <div  className='hover-hide'>
                  <Progress max={100} value={moraleByType.sum()} color={'success'} style={{height: 32, width: "100%"}}>
                    <div className='text-dark' title={''}>
                      <img src={'./icons/expedition/ExpeditionMorale.png'} alt={''} className=''/>{moraleByType.sum()}
                    </div>
                  </Progress>
                </div>

                {/*all moraleByType */}
                <div  className='hover-show'>
                  <Progress multi style={{height: 32, width: "100%"}}>
                    {/*{ex.bonusTypes.map(type => {*/}
                    {moraleByType.getKeys().map(type => {
                      const moraleValue = moraleByType.get(type)

                      return (
                        <Progress bar max={100} value={moraleValue} color={'success'} className='progress-border'>
                          <div className='text-dark' title={type}>
                            <img src={'./icons/expedition/Expedition' + type + '.png'} alt={type} className=''/>{moraleValue}
                          </div>
                        </Progress>
                      )
                    })}
                  </Progress>
                </div>
              </div>
            )}
          </Col>
          <Col sm={'auto'} className='mr-n2'>
            <Button className={'mx-2'} size={'sm'} disabled={(edit && forceEdit()) || expedition.fixedAdvises} onClick={toggleEdit}>
              <FontAwesomeIcon icon={edit ? "check" : "pencil-alt"} />
            </Button>
            <Button onClick={() => window.confirm('Really?') && props.deleteExpedition(props.expedition.id)} size='sm' className='mr-2' disabled={props.expedition.type === "expedition_exploration"}>
              <FontAwesomeIcon icon="trash" />
            </Button>
          </Col>
        </Row>
      </CardHeader>

      <CardBody>
        {edit
          ?
          <>
            <ExpeditionAdvise
              expedition={props.expedition}
              fnUpdate={props.fnUpdate}
            />
          </>
          : <>
            <Row>
              <Col sm={'auto'} className='mr-n2'>

            {/*all morale */}
            <Progress max={100} value={moraleByType.sum()} color={'success'} style={{height: 30, width: "100%"}} className={'mb-3 d-none-'}>
              <div className='text-dark' title={''}>
                <img src={'./icons/expedition/ExpeditionMorale.png'} alt={''} className=''/>{round(moraleByType.sum(), 1)}
              </div>
            </Progress>

            {/*all moraleByType */}
            <Progress multi style={{height: 30, width: "100%"}} className={'mb-3 mt-n2 d-none'}>
              {/*{ex.bonusTypes.map(type => {*/}
              {moraleByType.getKeys().map(type => {
                const moraleValue = moraleByType.get(type)

                return (
                  <Progress bar max={100} value={moraleValue} color={'success'} className='progress-border'>
                    <div className='text-dark' title={type}>
                      <img src={'./icons/expedition/Expedition' + type + '.png'} alt={type} className=''/>{moraleValue}
                    </div>
                  </Progress>
                )
              })}
            </Progress>

            {/*
            <ButtonGroup className='mb-3 d-block- d-none'>
              {ships.map(s => (
                <ShipSelectButton ship={s} onClick={() => setShip(s)} color={'secondary'} active={ship === s} />
              ))}
            </ButtonGroup>
            <ButtonGroup className='mb-3 d-block- d-none' vertical>
              {ships.map(s => (
                <ShipSelectButton ship={s} onClick={() => setShip(s)} color={'secondary'} active={ship === s} vertical />
              ))}
            </ButtonGroup>
            */}

            <Row className='my-3'>
              {/* ship selection */}
              <Col sm={'auto'}>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="right">
                  <DropdownToggle tag="div">
                    <ShipSelectButton ship={ship} caret active={dropdownOpen}/>
                  </DropdownToggle>
                  <DropdownMenu className="p-0 ml-0- border-0" style={{minWidth: 10}}>
                    <ButtonGroup className='d-block-'>
                      {ships.map((s, key) => (<>
                        <ShipSelectButton ship={s} onClick={(e) => {setShip(s); setDirty(true); if(!e.shiftKey) toggle()} } color={'secondary'} active={ship === s} simple />
                        {key % 3 === 2 && <br/>}{/*todo: funzt nicht*/}
                      </>))}
                    </ButtonGroup>
                  </DropdownMenu>
                </Dropdown>
              </Col>

              {/* loaded goods and items */}
              <Col sm={'auto'} className='mr-n3'>
                {[...loadedGoods, ...Array(Math.max(0, ship.slots.cargo - loadedGoods.length))].map((good, key) => (<>
                  {good !== undefined ? <>
                    <div key={key}
                         className={'mb-1 mr-3 form-inline d-inline-block ' + classNames({"border border-warning": ship.slots.cargo <= key})}
                         onContextMenu={event => {event.preventDefault(); unloadGood(key)}}
                    >
                      <GoodMediaObject good={good.good} mr={true} middle/>
                      <InputWrapper
                        bsSize='sm' className={'text-center'} style={{width: 50}}
                        value={good.amount} min={0} max={50}
                        fnBubbleValue={(value) => loadGood(key, good.good, value)}
                      />
                    </div>
                  </> : <ExpeditionEmptySlot/>}
                  {key % 3 === 2 && <br/>}
                </>))}

                <hr className="mt-1 mb-2 mr-3"/>

                {/*style={{cursor: "not-allowed"}} title={'not yet implemented'}*/}
                {false && [...loadedItems, ...Array(Math.max(0, ship.slots.items - loadedItems.length))].map((item, key) => (<>
                  {item !== undefined ? <>
                    <div key={key}
                         className={'mb-1 mr-3 form-inline d-inline-block ' + classNames({"border border-warning": ship.slots.items <= key})}
                         onContextMenu={event => {event.preventDefault(); unloadItem(key)}}
                         title={item.Name}
                    >
                      {/*<MediaObject thing={itemName} mr={true} middle type={'item'} />*/}
                      <MediaObject object={item} mr={true} middle type={'items'}/>
                    </div>
                  </> : <ExpeditionEmptySlot/>}
                  {key % 3 === 2 && <br/>}
                </>))}
              </Col>

              <Col sm={'auto'}>
                {/*<Button onClick={update}>speichern</Button>*/}
                <label htmlFor="saved"><input type={'checkbox'} checked={!dirty} onClick={save} className='mr-1' id='saved'/>saved</label>
                <br/>
                <label htmlFor="showAll"><input type={'checkbox'} checked={showAll} onChange={toggleShowAll} className='mr-1' id='showAll'/>showAll</label>
                <br/>
                {props.unlockedWorlds.length > 2 && <ButtonGroup size='sm'>
                  {worlds.filter(w => props.unlockedWorlds.includes(w.id)).map((world, key) => (
                    <Button
                      key={key}
                      title={trans(world)}
                      className='p-1'
                      active={startworld === world.id}
                      disabled={showAll}
                      onClick={() => {setDirty(true); setStartworld(world.id)}}
                    >
                      <img src={'./icons/worlds/' + world.id + '.png'} alt={trans(world)} style={{width: 24, height: 24}}/>
                    </Button>
                  ))}
                </ButtonGroup>}
              </Col>
            </Row>


            {/*Extra_rations*/}
            <Row className='mb-3'>
              <Col className='text-center' sm={'auto'}>
                <img src={'./icons/expedition/ExpeditionExtra_rations.png'} alt={"Extra_rations"} title={"Extra_rations"}/>
              </Col>

              <Col className=''>
                {goodsByType("Extra_rations").map((producer, key) => (<>
              <span key={key} onClick={() => loadGood(null, producer.key, 50)} className='d-inline-block mr-3 mb-1' style={{width: 55}}>
                <GoodMediaObject producer={producer} className={'mr-1' + (!props.unlockedProducers.includes(producer.key) ? ' text-muted locked producer' : '')}/>
                <span className={
                  (Object.keys(expedition_supplies[producer.provides]).length > 1 ? ' font-weight-bold' : '')
                  +
                  (Object.keys(expedition_supplies[producer.provides]).filter(bonus => bonus !== "Extra_rations" && advises.includes(bonus)).length > 0 ? ' text-underline' : '')
                }>{expedition_supplies[producer.provides]["Extra_rations"]}</span>
              </span>
                  {key % 8 === 7 ? <br/> : ''}
                </>))}
              </Col>
            </Row>

            {/*skills and goods*/}
            <Row className='mb-3'>
              {ex.skills.map((type) => (<>
                <Col sm={'auto'} className='text-center- no-gutters' style={{width: 83}}>
                  <Progress color="success" value={skillByType.get(type)} max={100} style={{height: 40}} className='mb-2' title={type}>
                    <div className='text-dark' title={type}>
                      <img src={'./icons/expedition/Expedition' + type + '.png'} className='mx-auto' alt={type}/> {skillByType.get(type)}
                    </div>
                  </Progress>

                  {/*goods to load*/}
                  {goodsByType(type).map(producer => (
                    <div onClick={() => loadGood(null, producer.key, 50)}>
                      <GoodMediaObject producer={producer} className={'mr-1' + (!props.unlockedProducers.includes(producer.key) ? ' text-muted locked producer' : '')}/>
                      <span className={Object.keys(expedition_supplies[producer.provides]).length > 1 ? 'text-underline' : ''}>{expedition_supplies[producer.provides][type]}</span>
                    </div>
                  ))}
                </Col>
              </>))}
            </Row>

              </Col>
            </Row>
          </>
        }
      </CardBody>
    </>
  )
}

ExpeditionPreparation.propTypes = {
  unlockedProducers: PropTypes.arrayOf(PropTypes.string).isRequired,
  allPopulation: PropTypes.object.isRequired, // TieredMap
  expedition: PropTypes.object.isRequired,
}

export default ExpeditionPreparation