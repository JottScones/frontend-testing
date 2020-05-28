import React from 'react';
import {Doughnut, Chart} from 'react-chartjs-2';
import {Typography} from '@material-ui/core';

const Capacity = (props) => {
  const capacity = props.capacity;

  return (
    <div className='Capacity Chart'>
      <Doughnut
        data={{
          labels: ['full', 'empty'],
          datasets:[{
            label:'Capacity',
            data:[capacity, 100-capacity],
            backgroundColor:['#2E8B57', '#ddd'],
            borderWidth: 1
          }],
          text: `${capacity}%`
        }}
        options={{
          responsive: true,
          rotation: 1 * Math.PI,
          circumference: 1 * Math.PI,
          legend: {
              display: false
          },
          tooltip: {
              enabled: false
          },
          cutoutPercentage: 90
        }}
      />
    </div>
  )
};

/* This code is from:
  https://stackoverflow.com/questions/42759306/add-text-inside-doughnut-chart-from-chart-js-2-in-react
  It adds text attribute to doughnut graphs so we can have centered text
*/
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);

    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.5;

    ctx.fillText(text, textX, textY);
  }
});

export default Capacity;
