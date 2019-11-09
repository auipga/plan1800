import React, {Component} from 'react'
import PropTypes from 'prop-types/'
import {Input, Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap"

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
    const canWant = balance < 0

    const loadings  = trades.filter(t => t.from === island.id                       )
    const droppings = trades.filter(t => t.from !== null      && t.to === island.id )
    const droppable = trades.filter(t => t.from !== island.id && t.to === null      )
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
              &#10150;
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
                      className={'px-1 py-0 '} size={'sm'}><span>&#10004;</span></Button>
            </DropdownItem>

            {droppings.map(trade => (
              <DropdownItem toggle={false}>
                <span className={'mr-2'}>&#10133;</span>
                <span className={'mr-2'}>{trade.amount.toFixed(2)} from {trade.from}</span>
                <Button onClick={() => fnTrade(trade, this.createTradeObject(trade.from, null, good, trade.amount))}
                        className={'px-1 py-0 '} size={'sm'}><span>&#10006;</span></Button>
              </DropdownItem>
            ))}

            {droppable.map(trade => (
              <DropdownItem toggle={false} onClick={() => fnTrade(trade, this.createTradeObject(trade.from, island.id, good, trade.amount)) }>
                <span className={'mr-2'}>&#10067;</span>
                <span className={'mr-2'}>{trade.amount.toFixed(2)} from {trade.from}</span>
                <span className={'mr-2'}>&#10004;</span>
              </DropdownItem>
            ))}


            {/*{wanted.map(trade => (*/}
            {/*  <DropdownItem toggle={false} onClick={() => fnTrade(trade, this.createTradeObject(island.id, trade.to, good, trade.amount)) }>*/}
            {/*    load {trade.amount.toFixed(2)} for ({trade.to})*/}
            {/*  </DropdownItem>*/}
            {/*))}*/}

            {/*{canWant ?*/}
            {/*  <DropdownItem toggle={false} onClick={() => fnTrade(null, this.createTradeObject(null, island.id, good, -balance)) }>want {(-balance).toFixed(2)}</DropdownItem>*/}
            {/*: <></>}*/}
            {loadings.map(trade => (
              <DropdownItem toggle={false}>
                <span className={'mr-2'}>&#10134;</span>
                <span className={'mr-2'}>{trade.amount.toFixed(2)} to {trade.to ? trade.to : <>&#10031;</>}</span>
                <Button onClick={() => fnTrade(trade, null) }
                        className={'px-1 py-0 '} size={'sm'}><span>&#10006;</span></Button>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>

      </>
    )
  }
}

Trading.propTypes = {
  island: PropTypes.object.required,
  good: PropTypes.string.required,
  balance: PropTypes.int,//.required,
  trades: PropTypes.object.required,
  fnTrade: PropTypes.func.required,
}
