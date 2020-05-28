import React from 'react';
import {Doughnut, Chart} from 'react-chartjs-2';
import "typeface-roboto";

const colorOfBar = capacity => (
  capacity < 60 ? '#2E8B57' :
  capacity < 80 ? '#EB8258' :
    '#DA627D'
);

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
            /*If capacity is greater than 80 color is red*/
            backgroundColor:[colorOfBar(capacity), '#ddd'],
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
    ctx.font = fontSize + "em roboto";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.5;

    ctx.fillText(text, textX, textY);
  }
});

export default Capacity;
