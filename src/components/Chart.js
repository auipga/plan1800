import React from 'react';
import {RGB_Log_Blend} from "../functions/color";
import ReactMinimalPieChart from "react-minimal-pie-chart";

export default class Chart extends React.Component {

  render() {
    const { consumption } = this.props;
    return (
      <ReactMinimalPieChart
        data={[
          {
            color: RGB_Log_Blend(
              Math.min(Math.max(-consumption, 0), 1),
              // 'rgba(100,200,255,0.5)',
              'rgba(100,255,100,0.5)',
              'rgba(255,50,50,0.5)',
            ),
            value: consumption.toPrecision(2)
          }
        ]}
        background={consumption === 0 ? 'rgba(100,200,255,0.3)' : ''}
        totalValue={12}
        startAngle={-90}
        label={'2'}
        labelPosition={0}
        labelStyle={{
          fontSize: '50px',
          fill: '#212529'
        }}
        lineWidth={100}
        style={{
          height: '30px'
        }}
      />
    );
  }
};


