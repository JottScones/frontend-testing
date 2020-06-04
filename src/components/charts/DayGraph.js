import React from 'react';
import {Bar} from 'react-chartjs-2';

const DayGraph = (props) => {
  if (props.barData) {
    return (
      <div className="Bar Chart">
        <Bar
          data={props.barData}
          options={{
            title: {
              display: true,
              text: (props.dayNumber === (new Date().getDay()) ? "Today" : props.days) + "'s average",
              fontSize: 15
            },
            legend: {
              display:false
            },
            scales: {
              xAxes: [{
                display: false,
                barPercentage: 1.25,
                ticks: {
                  max: '12:00',
                }
              }, {
                scaleLabel: {
                  display: true,
                  labelString: 'Time intervals'
                },
                display: true,
                ticks: {
                  autoSkip: false,
                  max: '13:00',
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
  } else {
    return null;
  }
};

export default DayGraph;
