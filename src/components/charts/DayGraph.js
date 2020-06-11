import React from 'react';
import {Bar} from 'react-chartjs-2';

const DayGraph = (props) => {
  const {textColor, gridColor} = props;

  if (props.barData) {
    return (
      <div className="Bar Chart">
        <Bar
          data={props.barData}
          options={{
            title: {
              display: true,
              text: (props.dayNumber === (new Date().getDay()) ? "Today" : props.days) + "'s average",
              fontSize: 20,
              fontColor: textColor
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
                  labelString: 'Time intervals',
                  fontColor: textColor
                },
                display: true,
                ticks: {
                  autoSkip: false,
                  max: '13:00',
                  fontColor: textColor
                },
                gridLines: {
                  display: true,
                  color: gridColor
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Capacity %',
                  fontColor: textColor
                },
                ticks: {
                  beginAtZero: true,
                  fontColor: textColor
                },
                gridLines: {
                  display: true,
                  color: gridColor
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
