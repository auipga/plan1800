import React, {useState} from 'react';
import PropTypes from 'prop-types/'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup, Input, Progress, Row, Col} from 'reactstrap';
import worlds from "../data/worlds";
import producers from "../data/producers";
import allShips from "../data/ships";
import GoodMediaObject from "./GoodMediaObject";
// import items from "../data/items";
import MediaObject from "./MediaObject";
import KeyedMap from "../classes/KeyedMap";
import expedition_supplies from "../data/expedition_supplies";
import * as ex from '../functions/expeditions'

const ExpeditionPreparationOldWithButtonAndModal = (props) => {

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const [expType, setExpType] = useState('expedition_generic')

  // mission difficulty: 1, 2 or 3
  const [skulls, setSkulls] = useState(1)

  // advised mission preparation
  const initialAdvises = [["Extra_rations"], ["Extra_rations", "Medicine", "Crafting", "Diplomacy", "Navigation"], ex.advises]
  const [advises, setAdvises] = useState(initialAdvises[0])
  const toggleAdvise = (advise) => {
    if (advise === "Extra_rations") {
      return
    }
    if (advises.includes(advise)) {
      setAdvises(advises.filter(f => f !== advise))
    } else {
      setAdvises(["Extra_rations", ...advises.slice(-2), advise])
    }
  }

  // show or hide goods of not yet unlocked producers
  const [showAll, setShowAll] = useState(false)
  const toggleShowAll = () => setShowAll(!showAll)

  // select a ship type
  const ships = allShips
  // .filter(s => s.slots.cargo >= 2)
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
  }
  const unloadGood = (slot) => {
    setLoadedGoods(loadedGoods.filter((f,key) => key !== slot))
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
  const unlockedGoodKeys = producers.filter(p => allGoodKeys.includes(p.key))

  const goodsByType = type => unlockedGoodKeys.filter(p =>
    // only goods of this world
       (showAll || worlds.find(w => w.id === props.worldId).socialClassIDs.includes(p.tierId))
    // only unlocked producers
    && (showAll || props.unlockedProducers.includes(p.key))
    // of that type
    && expedition_supplies[p.key].hasOwnProperty(type)
  ).sort((a, b) => expedition_supplies[b.key][type] - expedition_supplies[a.key][type])

  const calculateMorale = () => {
    const difficultyFactor = [undefined, 1, 1/4, 1/8][skulls]

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

    // todo: redo this
    // loadedItems.forEach(item => {
    //   const definition = item.ExpeditionAttribute
    //
    //   if (definition.BaseMorale !== undefined) {
    //     moraleByType.plus("Base_morale", definition.BaseMorale)
    //   }
    //
    //   const boni = definition.ExpeditionAttributes
    //   boni.forEach(bonus => {
    //     if (advises.includes(bonus.Attribute)) {
    //       moraleByType.plus(bonus.Attribute, bonus.Amount*2)
    //     } else {
    //       moraleByType.plus(bonus.Attribute, bonus.Amount)
    //     }
    //   })
    // })

    // console.log(skillByType);
    // console.log(moraleByType);
  }

  calculateMorale()

  return (
    <>
      <Button onClick={toggle} className='mr-2 p-1'><img src={'./icons/expedition/Icon_expedition_generic.png'} alt='exp'/></Button>
      <Modal isOpen={modal} toggle={toggle} contentClassName='bg-secondary' size='lg' >
        <ModalHeader toggle={toggle}>
          <ButtonGroup>
            {/*.filter(t => t !== "expedition_generic")*/}
            {ex.types.map(type => (
              <Button onClick={() => setExpType(type)}  active={expType === type}>
                <img src={'./icons/expedition/Icon_'+type+'.png'} alt={type}/>
              </Button>
            ))}
          </ButtonGroup>
        </ModalHeader>
        <ModalBody>
          {/*difficulty selection*/}
          <ButtonGroup className='mb-3 mr-3'>
            {[1,2,3].map(value => (
              <Button onClick={() => setSkulls(value)} color={'secondary'} active={skulls >= value}>
                <img src={'./icons/expedition/ExpeditionSkulls'+value+'.png'} alt={value}/>
              </Button>
            ))}
          </ButtonGroup>

          {/*advise selection*/}
          <ButtonGroup className='mb-3 '>
            {ex.advises.map(type => (
              <Button onClick={() => toggleAdvise(type)} color={'secondary'} active={advises.includes(type)}>
                <img src={'./icons/expedition/Expedition'+type+'.png'} alt={type}/>
              </Button>
            ))}
          </ButtonGroup>

          <label htmlFor="showAll"><input type={'checkbox'} checked={showAll} onChange={toggleShowAll} className='mr-1' id='showAll'/>showAll</label>

          {/*ship selection*/}
          <ButtonGroup className='mb-3 d-block'>
            {ships.slice(0,10).map(s => (
              <Button onClick={() => setShip(s)} color={'secondary'} active={ship === s} title={s.key}>
                <img src={'./icons/ships/'+s.key+'.png'} alt={s.key} />
                <br/>
                {s.slots.cargo}|{s.slots.items}
                {/*{advises.includes("Navigation") ? <>*/}
                <br/>
                <img src={'./icons/expedition/ExpeditionNavigation.png'} alt={s.key}/>{s.expeditionBonus.Navigation}
                {/*</> : null}*/}
                {/*{advises.includes("Might") ? <>*/}
                <br/>
                <img src={'./icons/expedition/ExpeditionMight.png'} alt={s.key}/>{s.expeditionBonus.Might}
                {/*</> : null}*/}
              </Button>
            ))}
          </ButtonGroup>

          {/*loadedGoods*/}
          <div style={{height: 35}}>
            {loadedGoods.length > 0 ?
              loadedGoods.map((good, key) => (
              <div key={key}
                   className='mb-1 mr-2 form-inline d-inline-block'
                   onContextMenu={event => { event.preventDefault(); unloadGood(key) }}
              >
                <GoodMediaObject good={good.good} mr={true} middle />
                <Input
                  type='number'
                  bsSize='sm'
                  className={'mr-2 text-center'}
                  style={{width: 50}}
                  min={0}
                  max={50}
                  step={5}
                  value={good.amount}
                  onChange={(e) => loadGood(key, good.good, e.target.value)}
                  onMouseEnter={e => e.target.focus()}
                />
              </div>
            ))
              : 'select goods!'}
          </div>

          {/*loadedItems*/}
          <div style={{height: 35}}>
            {loadedItems.length > 0 ?
              loadedItems.map((item, key) => (
                <div key={key}
                     className='mb-1 mr-2 form-inline d-inline-block'
                     onContextMenu={event => { event.preventDefault(); unloadItem(key) }}
                     title={item.Name}
                >
                  {/*<MediaObject thing={itemName} mr={true} middle type={'item'} />*/}
                  <MediaObject object={item} mr={true} middle type={'items'} />
                </div>
              ))
              : <s title={'not yet implemented'} style={{cursor: "not-allowed"}}>select items!</s>}
          </div>

          {/*all morale */}
          <Progress max={100} value={moraleByType.sum()} color={'success'} style={{height:30, width:"100%"}} className={'mb-3'}>
            <div className='text-dark' title={''}>
              <img src={'./icons/expedition/ExpeditionMorale.png'} alt={''} className=''/>{moraleByType.sum()}
            </div>
          </Progress>

          {/*all moraleByType */}
          <Progress multi style={{height:30, width:"100%"}} className={'mb-3 d-none'}>
            {/*{ex.bonusTypes.map(type => {*/}
            {moraleByType.getKeys().map(type => {
              const moraleValue = moraleByType.get(type)

              return (
                <Progress bar max={100} value={moraleValue} color={'success'} className='progress-border'>
                  <div className='text-dark' title={type}>
                    <img src={'./icons/expedition/Expedition'+type+'.png'} alt={type} className=''/>{moraleValue}
                  </div>
                </Progress>
              )
            })}
          </Progress>

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
                    (Object.keys(expedition_supplies[producer.key]).length > 1 ? ' font-weight-bold': '')
                    +
                    (Object.keys(expedition_supplies[producer.key]).filter(bonus => bonus !== "Extra_rations" && advises.includes(bonus)).length > 0 ? ' text-underline': '')
                  }>{expedition_supplies[producer.key]["Extra_rations"]}</span>
                </span>
                {key%5 === 4 ? <br/> : ''}
              </>))}
            </Col>
          </Row>

          {/*ex.skills and goods*/}
          <Row className='mb-3'>
            {ex.skills.map((type) => (<>
              <Col sm={'auto'} className='text-center- no-gutters' style={{width:83}}>
                <Progress color="success" value={skillByType.get(type)} max={100} style={{height:40}} className='mb-2' title={type}>
                  <div className='text-dark' title={type}>
                    <img src={'./icons/expedition/Expedition'+type+'.png'} className='mx-auto' alt={type}/> {skillByType.get(type)}
                  </div>
                </Progress>

                {/*goods to load*/}
                {goodsByType(type).map(producer => (
                  <div onClick={() => loadGood(null, producer.key, 50)}>
                    <GoodMediaObject producer={producer} className={'mr-1' + (!props.unlockedProducers.includes(producer.key) ? ' text-muted locked producer' : '')}/>
                    <span className={Object.keys(expedition_supplies[producer.key]).length > 1 ? 'text-underline': ''}>{expedition_supplies[producer.key][type]}</span>
                  </div>
                ))}
              </Col>
            </>))}
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Close & forget</Button>{' '}
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

ExpeditionPreparationOldWithButtonAndModal.propTypes = {
  unlockedProducers: PropTypes.arrayOf(PropTypes.string).isRequired,
  worldId: PropTypes.number.isRequired,
  allPopulation: PropTypes.object.isRequired, // TieredMap
}

export default ExpeditionPreparationOldWithButtonAndModal