import React from 'react';
import {Bar} from 'react-chartjs-2';

const DayGraph = (props) => {
  return (
    <div className="Bar Chart">
      <Bar
        data={props.barData}
        options={{
          scales: {
            xAxes: [{
              display: false,
              barPercentage: 1.3,
              ticks: {
                max: 12,
              }
            }, {
              display: true,
              ticks: {
                autoSkip: false,
                max: 13,
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }}
      />
    </div>
  )
};

export default DayGraph;
