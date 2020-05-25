import React, {memo, useState} from 'react';
import {useSelector} from "react-redux";
import PropTypes from 'prop-types';

import Media from "reactstrap/es/Media";

import Chart2 from "../../../Chart2";
import ProductMediaObject from "./ProductMediaObject";
import Tooltip from "reactstrap/es/Tooltip";


const ProductMemo = (props) => {
  const debug = useSelector(state => state.debug)
  const {product, balance, tradingBalance} = props

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);


  return (
    <div className='Good' id={"good"+product.GUID}>
      <Media className='GoodItem'>
        <Media left>
          <ProductMediaObject product={product}/>
        </Media>
        <Media body>
          {debug.includes('show_balance_chart') &&
          <Chart2 balance={balance} tradingBalance={tradingBalance}/>
          }
          {debug.includes('show_balance_value') &&
          <span className={'i30 d-inline-block text-right' + (balance === 0 ? ' text-muted' : '')}>
              {balance}
            </span>
          }
          {/*<Chart balance={-.9}/>
          <Chart balance={0.1}/>
          <Button id={'popover_'+good} type='button' className='px-1 py-0 ml-1 d-none-'>
            <FontAwesomeIcon icon={'caret-right'}/>
          </Button>
          inselweite produktivitäts-anpassung
          trade*/}
        </Media>
      </Media>
      <Tooltip placement="right" isOpen={tooltipOpen} target={"good"+product.GUID} toggle={toggle}>{balance}</Tooltip>
    </div>
  )
}

ProductMemo.propTypes = {
  product: PropTypes.object.isRequired,
  balance: PropTypes.number.isRequired,
}

export default memo(ProductMemo)