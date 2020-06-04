import React from 'react';
import {Bar} from 'react-chartjs-2';

const WeekGraph = (props) => {
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
              scaleLabel: {
                display: true,
                labelString: 'Capacity %'
              },
              ticks: {
                beginAtZero: true
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
