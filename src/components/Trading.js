import React, {Component} from 'react'
import PropTypes from 'prop-types/'
import {Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Input} from "reactstrap"

export default class Trading extends Component {
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
    const enabled   = canSend || /*canWant ||*/ loadings.length || droppable.length || droppings.length

    return (<>
        <ButtonDropdown
          direction="right"
          isOpen={this.state.btnDropright}
          toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }) }}
        >
          <DropdownToggle caret className={{'px-1 py-0 mr-2': true, 'text-danger': highlight, 'text-light': inUse}}
                          disabled={!enabled}>
            <img src={'./icons/Icon_traderoutes.png'} alt='+' style={{width: 18, height: 18}}/>
          </DropdownToggle>

          <DropdownMenu>
            {/*canSend*/}
            <DropdownItem toggle={false} disabled={!canSend} className={'form-inline py-0'}>
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

Trading.propTypes = {
  island: PropTypes.object.isRequired,
  good: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  trades: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnTrade: PropTypes.func.isRequired,
}
