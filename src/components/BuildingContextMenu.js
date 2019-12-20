import React, {useState} from 'react'
import PropTypes from 'prop-types/'
import classnames from 'classnames'
import {Button, Popover, PopoverHeader, PopoverBody, Input, InputGroup, InputGroupAddon, TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"
import InputWrapper from "./InputWrapper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BuildingContextMenu = (props) => {
  const {island, good, tradeSyncs, fnTradeSync} = props
  const {buildingCount, electricity, buildingsWithElectricity, canEletrified} = props

  const tabs = [
    {
      name: "Items",
      icon: "tools",
      img: "./icons/.png",
      hidden: true || !buildingCount
    }, // angle-double-up
    {
      name: "Electricity",
      icon: "bolt",
      img: "./icons/Electricity_on.png",
      hidden: !buildingCount || !electricity || !canEletrified
    }, // plug power-off
    {
      name: "Routes",
      icon: "sync",
      img: "./icons/Icon_traderoutes.png",
      hidden: props.islands.length === 1 || good === "Electricity"
    }, //  sync sync-alt retweet share-alt-square
    {
      name: "Productivity",
      icon: "tachometer-alt",
      hidden: !buildingCount || good === "Electricity"
    },
  ]

  const [opened, setOpened] = useState(false)
  const toggleOpened = () => {
    setOpened(!opened)
    setActiveTab(tabs.find(t => !t.hidden).name)
  }

  const [activeTab, setActiveTab] = useState(null)
  const toggleActiveTab = tab => {
    if(activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  // const syncHere = tradeSyncs.find(s => s.islandIDs.includes(island.id))
  // // const syncHereWith = syncHere.reduce((all, s) => [...all,...s.islandIDs], [])
  // const syncHereWith = syncHere === undefined ? [] : syncHere.islandIDs
  // const unsyncedIslands = props.islands.filter(i => island.id !== i.id && syncHereWith.includes(i.id))

  const sync = tradeSyncs.find(s => s.islandIDs.includes(island.id))
  const synced = sync !== undefined
  const otherSyncs = tradeSyncs.filter(s => !s.islandIDs.includes(island.id))

  if (tabs.find(t => !t.hidden) === undefined) {
    return <></>
  }

  return (<>
      <Button id={'popover_'+props.producer.key} type='button' className={'px-1 py-0 mr-2'}>
        {/*caret-right sliders-h bars ellipsis-v */}
        <FontAwesomeIcon icon={'sliders-h'} color={'#dddddd'}/>
        {/*<FontAwesomeIcon icon={'caret-right'}/>*/}
      </Button>
      <Popover placement="right-start" trigger='legacy' isOpen={opened} target={'popover_'+props.producer.key} toggle={toggleOpened}>
        <PopoverHeader className={'p-0 border-0'} style={{minWidth: 216}}>
          <Nav tabs>
            {tabs.filter(t => !t.hidden).map((tab, key) => (
              <NavItem title={tab.name}>
                <NavLink
                  className={classnames({ active: activeTab === tab.name, "py-1": true })}
                  style={{height:30}}
                  onMouseEnter={() => { toggleActiveTab(tab.name) }}
                  disabled={tab.disabled}
                >
                  {tab.icon
                    ? <FontAwesomeIcon icon={tab.icon} fixedWidth color={'#343a40'}/>
                    : <img src={tab.img} alt={tab.name} style={{height: 18, width: 18}}/>
                  }
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </PopoverHeader>
        <PopoverBody style={{minHeight:80}}>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="Productivity">
              <p className='mb-2 font-italic text-muted'>Productivity boost in %</p>
              <div style={{width: 50}} className={'d-inline-block mr-2'}>
                <InputWrapper
                  value={props.productivityBoost}
                  className={'text-center form-control-sm'}
                  fnBubbleValue={value => props.fnProductivityBoost(parseInt(value))}
                  // min={-50}
                  // max={+50}
                  min={-99}
                  max={+500}
                  leadingPlus={true}
                  slider={true}
                />
              </div>
              <Button
                size={'sm'}
                className={'px-1 py-0' + (props.productivityBoost === 0 ? ' d-none': '')}
                title='set 0'
                onClick={() => props.fnProductivityBoost(0)}>
                <FontAwesomeIcon icon={'undo'} size={'sm'}/>
              </Button>
            </TabPane>
            <TabPane tabId="Electricity">
              {electricity ? (<>
                  {canEletrified ? (<>
                      <p className='mb-2 font-italic text-muted'>How many are plugged?</p>
                      <div style={{width: 50}} className={'d-inline-block mr-2'}>
                        <InputWrapper
                          value={buildingsWithElectricity}
                          className={'text-center form-control-sm  px-0'}
                          fnBubbleValue={value => props.fnSetWithElectricity(value)}
                          max={buildingCount}
                          disabled={buildingsWithElectricity === "all"}
                        />
                      </div>
                      <label htmlFor={"plugall_"+props.producer.key}>
                        <input type='checkbox' id={"plugall_"+props.producer.key} className='mr-1' value='all'
                               checked={buildingsWithElectricity === "all"} onChange={(e) => props.fnSetWithElectricity(e.target.checked?"all":buildingCount)}
                        />
                        <FontAwesomeIcon icon={'plug'} className='mx-1'/>plug all
                      </label>
                    </>)
                    :
                    <p className='mb-2 font-italic text-muted'>Can't use electricity</p>
                  }
                </>)
                :
                <p className='mb-2 font-italic text-muted'>Build electricity first</p>
              }
            </TabPane>
            <TabPane tabId="Electricity_alt">
              <InputGroup>
                <Input
                  type='number'
                  bsSize='sm'
                  className='text-center px-0'
                  min={0}
                  max={buildingCount}
                  // value={props.buildingCount}
                  // onChange={(e) => props.fnSetElectricity(e.target.value)}
                  onBlur={(e) => e.target.value = Math.min(props.buildingCount, Math.max(0,e.target.value))}
                  onMouseEnter={e => e.target.focus()}
                />
                <InputGroupAddon addonType="prepend">
                  <Button color='secondary' className={'p-0'}
                    // onClick={e => fnChangeElectricity(e, island, producer.key, -1)}
                          onMouseEnter={e => e.target.focus()}
                  >
                    <img src={'./icons/Electricity_on.png'} alt='+' style={{height: 24, width: 24}}/>
                  </Button>
                </InputGroupAddon>
                <Input
                  type='number'
                  bsSize='sm'
                  className='text-center px-0'
                  min={0}
                  max={buildingCount}
                  // value={props.buildingCount}
                  // onChange={(e) => props.fnSetElectricity(e.target.value)}
                  onBlur={(e) => e.target.value = Math.min(props.buildingCount, Math.max(0,e.target.value))}
                  onMouseEnter={e => e.target.focus()}
                />
              </InputGroup>
            </TabPane>
            <TabPane tabId="Routes">
              <p className='mb-2 font-italic text-muted'>Share resource with islands</p>
              {props.islands.filter(i => island.id !== i.id).map((i, key) => {
                const syncedHere = synced && sync.islandIDs.includes(i.id)
                const ids = syncedHere ? sync.islandIDs.filter(id => id !== i.id) : (synced ? [...sync.islandIDs, i.id] : [island.id, i.id])

                return (
                  <label
                    htmlFor={'routesFor'+good+'_island_'+key}
                    className={classnames({'form-inline': true, 'text-muted': otherSyncs.filter(s => s.islandIDs.includes(i.id)).length })}
                  >
                    <Input
                      id={'routesFor'+good+'_island_'+key}
                      type='checkbox'
                      checked={syncedHere}
                      disabled={otherSyncs.filter(s => s.islandIDs.includes(i.id)).length}
                      onChange={() => fnTradeSync(good, island.id, ids)}
                    />
                    <span className={'text-truncate'} style={{maxWidth:170}}>{i.name}</span>
                  </label>
                )
              })}
            </TabPane>
            <TabPane tabId="Items">
              <p className='mb-2 font-italic text-muted'>Create Handelskammern</p>
              to be implemented
            </TabPane>
          </TabContent>
        </PopoverBody>
      </Popover>
    </>
  )
}

BuildingContextMenu.propTypes = {
  island: PropTypes.object.isRequired,
  islands: PropTypes.arrayOf(PropTypes.object).isRequired,
  good: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  tradeSyncs: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnTradeSync: PropTypes.func.isRequired,
  productivityBoost: PropTypes.number.isRequired,
  fnProductivityBoost: PropTypes.func.isRequired,
  canEletrified: PropTypes.bool.isRequired,
  fnSetWithElectricity: PropTypes.func.isRequired,
}

export default BuildingContextMenu