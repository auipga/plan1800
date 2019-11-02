import React from 'react';
import PropTypes from 'prop-types/';
import ReactMinimalPieChart from "react-minimal-pie-chart";

export default class Chart extends React.Component {

  render() {
    const { balance, max } = this.props;

    const much = Math.abs(balance) >=10;
    const value = balance.toFixed(much ? 0 : 1)

    return (
      <ReactMinimalPieChart
        data={[
          {
            color: balance < 0 ? 'rgba(255,50,50,0.5)' : 'rgba(100,255,100,0.5)',
            value: value
          }
        ]}
        background={balance !== 0 ? 'rgba(255,255,75,0.2)' : 'rgba(255,255,75,0.2)'}
        totalValue={max !== undefined ? max : 5}
        startAngle={-90}
        label={'2'}
        labelPosition={0}
        labelStyle={{
          fontSize: '50px',
          fill: '#212529'
        }}
        lineWidth={100}
        style={{
          height: '30px',
          width: '30px',
        }}
      />
    );
  }
};


Chart.propTypes = {
  balance: PropTypes.int, //.required,
  max: PropTypes.int,
};
