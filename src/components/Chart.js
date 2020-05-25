import React, {} from 'react';
import PropTypes from 'prop-types';
import ReactMinimalPieChart from "react-minimal-pie-chart";
import {sumBy} from "../functions/helpers";

const Chart = (props) => {

    const { balance, max } = props;

    const label = labelProps => {
      if (labelProps.dataIndex > 0) {
        return null
      }
      const balance = sumBy(labelProps.data, 'value')
      const much = Math.abs(balance) >=10;
      return balance.toFixed(much ? 0 : 1)
    }

    return (
      <ReactMinimalPieChart
        className='Chart'
        data={[{
          color: balance < 0 ? 'rgba(255,50,50,0.5)' : 'rgba(100,255,100,0.5)',
          value: balance
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
      />
    );
};


Chart.propTypes = {
  balance: PropTypes.number,//.isRequired,
  max: PropTypes.number,
};

export default Chart