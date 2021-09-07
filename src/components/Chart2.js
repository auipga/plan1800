import React, {} from 'react';
import PropTypes from 'prop-types';
import {PieChart as ReactMinimalPieChart} from "react-minimal-pie-chart";
import {sumBy} from "../functions/helpers";

const Chart2 = (props) => {

  const { balance, tradingBalance=0, max } = props;

  let value1 = 1
  let value2 = 2

  if ((balance + tradingBalance) < 0) {
    value1 = balance + tradingBalance
    value2 = 0
  } else if (balance < 0) {
    // } else if (balance < 0 && tradingBalance > Math.abs(balance)) {
    // } else if (balance < 0 && (balance + tradingBalance) > 0 ) {
    value1 = 0
    value2 = balance + tradingBalance
  } else if (tradingBalance < 0) {
    value1 = balance + tradingBalance
    value2 = 0
  } else {
    value1 = balance
    value2 = tradingBalance
  }

  const label = labelProps => {
    if (labelProps.dataIndex > 0) {
      return null
    }
    const balance = value1 + value2;
    const much = Math.abs(balance) >=10;
    return balance.toFixed(much ? 0 : 1)
  }

  return (
    <ReactMinimalPieChart
      className={'Chart '+props.className}
      data={[{
        color: value1 < 0 ? 'rgba(255,50,50,0.5)' : 'rgba(100,255,100,0.5)',
        value: value1
      },{
        color: value2 < 0 ? 'rgba(255,231,46,0.5)' : 'rgba(95,230,255,0.5)',
        value: value2
      }]}
      background={balance !== 0 ? 'rgba(255,255,75,0.2)' : 'rgba(255,255,75,0.2)'}
      totalValue={max !== undefined ? max : 5}
      startAngle={-90}
      label={label}
      labelPosition={0}
      labelStyle={{
        fontSize: '50px',
        fill: '#212529'
      }}
      lineWidth={100}
      // TODO: tooltip: t/m
    />
  );
};


Chart2.propTypes = {
  balance: PropTypes.number,//.isRequired,
  tradingBalance: PropTypes.number,
  max: PropTypes.number,
};

export default Chart2