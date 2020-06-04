import React from 'react';
import {Bar} from 'react-chartjs-2';

const WeekGraph = (props) => {
  const {textColor, gridColor} = props;
  return (
    <div className="Bar Chart">
      <Bar
        data={props.barData}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "Average capacity by day",
            fontSize: 25,
            fontColor: textColor
          },
          legend: {
            display: false
          },
          scales: {
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
            }],
            xAxes: [{
              ticks: {
                fontColor: textColor
              },
              gridLines: {
                display: true,
                color: gridColor
              }
            }]
          }
        }}
        onElementsClick={(elems) => {
          if (elems[0]) {
            let selectedIndex = (elems[0]._index + 1) % 7;
            props.setDayNumber(selectedIndex);
          }
        }}
      />

    </div>
  )
};

export default WeekGraph;
