import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarGraph = (props) => {
  return (
    <div className="Bar Chart">
      <Bar
        data={props.barData}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "Average capacity by day",
            fontSize: 25
          },
          legend: {
            display: false
          },
          scales: {
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

export default BarGraph;
