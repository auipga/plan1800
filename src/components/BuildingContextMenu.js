import React, {Component} from 'react'
import PropTypes from 'prop-types/'
import {Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap"

export default class BuildingContextMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnDropright: false,
      sendAmount: 0
    }
  }

  createTradeObject = (from, to, good, amount) => {
    return {
      from: from,
      to: to,
      good: good,
      amount: amount,
    }
  }

  render() {
    const {island, good, trades, fnTrade, balance} = this.props
    const {buildingCount, electricity, buildingsWithElectricity, canEletrified} = this.props

    const a = buildingsWithElectricity === "all"

    const canSend = balance > 0
    // eslint-disable-next-line
    const canWant = balance < 0

    const loadings  = trades.filter(t => t.from === island.id                       )
    const droppings = trades.filter(t => t.from !== null      && t.to === island.id )
    const droppable = trades.filter(t => t.from !== island.id && t.to === null      )
    // eslint-disable-next-line
    const wanted    = trades.filter(t => t.from === null      && t.to !== island.id )

    const highlight = droppable.length
    const inUse     = loadings.length || droppings.length

    return (<>
        <ButtonDropdown
          direction="right"
          isOpen={this.state.btnDropright}
          toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }) }}
        >
          <DropdownToggle caret className={{'px-1 py-0 mr-2': true, 'text-danger': highlight, 'text-light': inUse}}>
            {/*<img src={'./icons/Icon_traderoutes.png'} alt='+' style={{width: 18, height: 18}}/>*/}
          </DropdownToggle>

          <DropdownMenu>
            {buildingCount > 0 ? // productivityBoost
            <DropdownItem toggle={false} className={'form-inline'}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className='py-0 px-2'>
                    &#8597;{/*icon-up-down*/}
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  type='number'
                  bsSize='sm'
                  style={{width: 20}}
                  className='text-center'
                  min={-50}
                  max={+50}
                  placeholder={0}
                  value={this.props.productivityBoost}
                  onChange={(e) => this.props.fnProductivityBoost(parseInt(e.target.value))} /*Math.min(50, Math.max(-50, x))*/
                  onMouseEnter={e => e.target.focus()}
                />

                <InputGroupAddon addonType="append">
                  <InputGroupText className='py-0 px-1 text-center' style={{width:26}}>
                    %
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </DropdownItem>
              : null}

            {electricity && canEletrified ?
              <DropdownItem toggle={false} className={'form-inline '}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className='p-0'>
                      <img src={'./icons/Electricity_on.png'} alt='+' style={{height: 24, width: 24}}/>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type={a ? 'text':'number'}
                    disabled={a}
                    bsSize='sm'
                    className='text-center px-0'
                    min={0}
                    max={buildingCount}
                    value={buildingsWithElectricity}
                    onChange={(e) => this.props.fnSetWithElectricity(e.target.value)}
                    onBlur={(e) => e.target.value = Math.min(this.props.buildingCount, Math.max(0,e.target.value))}
                    onMouseEnter={e => e.target.focus()}
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText className='p-0'>
                      <Input type='checkbox' className='mx-1' value='all'
                             checked={a} onChange={(e) => this.props.fnSetWithElectricity(e.target.checked?"all":buildingCount)}
                      />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </DropdownItem>
              : null}

            {/*canSend*/}
            <DropdownItem toggle={false} disabled={!canSend} className={'form-inline'}>
              &#10150;{/*icon-send/load*/}
              <Input
                type='number'
                bsSize='sm'
                style={{width: 50}}
                className='mx-2 text-center pr-0 '
                min={0}
                max={balance}
                step={balance >= 2 ? 1 : 0.1}
                value={this.state.sendAmount.toFixed(2)}
                onChange={(e) => this.setState({sendAmount: parseFloat(e.target.value)})}
                onMouseEnter={e => e.target.focus()}
              />
              <Button onClick={() => fnTrade(null, this.createTradeObject(island.id, null, good, this.state.sendAmount)) }
                      className={'px-1 py-0 '} size={'sm'}><span>&#10004;{/*icon-check*/}</span></Button>
            </DropdownItem>

            {droppings.map((trade, key) => (
              <DropdownItem key={key} toggle={false}>
                {/*eslint-disable-next-line*/}
                <span className={'mr-2'}>&#10133;{/*icon-plus*/}</span>
                <span className={'mr-2'}>{trade.amount.toFixed(2)} from {trade.from}</span>
                <Button onClick={() => fnTrade(trade, this.createTradeObject(trade.from, null, good, trade.amount))}
                        className={'px-1 py-0 '} size={'sm'}><span>&#10006;{/*icon-X*/}</span></Button>
              </DropdownItem>
            ))}

            {droppable.map((trade, key) => (
              <DropdownItem key={key} toggle={false} onClick={() => fnTrade(trade, this.createTradeObject(trade.from, island.id, good, trade.amount)) }>
                {/*eslint-disable-next-line*/}
                <span className={'mr-2'}>&#10067;{/*icon-question-mark*/}</span>
                <span className={'mr-2'}>{trade.amount.toFixed(2)} from {trade.from}</span>
                <span className={'mr-2'}>&#10004;{/*icon-check*/}</span>
              </DropdownItem>
            ))}


            {/*{wanted.map((trade, key) => (*/}
            {/*  <DropdownItem key=key
            toggle={false} onClick={() => fnTrade(trade, this.createTradeObject(island.id, trade.to, good, trade.amount)) }>*/}
            {/*    load {trade.amount.toFixed(2)} for ({trade.to})*/}
            {/*  </DropdownItem>*/}
            {/*))}*/}

            {/*{canWant ?*/}
            {/*  <DropdownItem toggle={false} onClick={() => fnTrade(null, this.createTradeObject(null, island.id, good, -balance)) }>want {(-balance).toFixed(2)}</DropdownItem>*/}
            {/*: <></>}*/}
            {loadings.map((trade, key) => (
              <DropdownItem key={key} toggle={false}>
                {/*eslint-disable-next-line*/}
                <span className={'mr-2'}>&#10134;{/*icon-minus*/}</span>
                <span className={'mr-2'}>{trade.amount.toFixed(2)} to {trade.to ? trade.to : <>&#10031;{/*icon-star*/}</>}</span>
                <Button onClick={() => fnTrade(trade, null) }
                        className={'px-1 py-0 '} size={'sm'}><span>&#10006;{/*icon-X*/}</span></Button>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
      </>
    )
  }
}

BuildingContextMenu.propTypes = {
  island: PropTypes.object.isRequired,
  good: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  trades: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnTrade: PropTypes.func.isRequired,
  productivityBoost: PropTypes.number.isRequired,
  fnProductivityBoost: PropTypes.func.isRequired,
  canEletrified: PropTypes.bool.isRequired,
  fnSetWithElectricity: PropTypes.func.isRequired,
}
