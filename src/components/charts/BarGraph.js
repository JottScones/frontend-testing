import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './Chart.css'


class BarGraph extends Component {

  constructor(props) {
    super(props);
    this.state = {
      barData: props.barData
    };
  }

  render() {
    return (
      <div className="Bar Chart">
        <Bar
          data={this.state.barData}
          options={{
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
    );
  }

}

export default BarGraph;
