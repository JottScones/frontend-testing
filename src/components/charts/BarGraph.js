import React from 'react';
import {Bar} from 'react-chartjs-2';
import DayGraph from "./DayGraph";

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
        onElementsClick={(elems) => {
          if (elems[0]) {
            let selectedIndex = elems[0]._index;
            props.setDayNumber(selectedIndex);
          }
        }}
      />

    </div>
  )
};

export default BarGraph;
