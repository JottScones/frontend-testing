import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Chart.css'

class Capacity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capacityData: props.capacityData
    };
  }


  render() {
    const {capacity} = this.state.capacityData;
    return (
      <div className='Capacity Chart'>
        <Doughnut
          data={{
            labels: ['full', 'empty'],
            datasets:[{
              label:'Capacity',
              data:[capacity, 100-capacity],
              backgroundColor:['green', 'gray'],
              borderWidth: 0
            }]
          }}
          options={{
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            cutoutPercentage: 95
          }}
        />
        <h2 style={readOutStyle}>{capacity+'%'}</h2>
      </div>
    );
  }

}

const readOutStyle = {
  position: 'absolute',
  left: '50%',
  marginLeft: '-8vw',
  top: '20%',
  fontSize: '8vw',
  textAlign: 'center'
}

export default Capacity;
