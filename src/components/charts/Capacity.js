import React from 'react';
import {Doughnut} from 'react-chartjs-2';

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
            backgroundColor:['green', 'gray'],
            borderWidth: 0
          }]
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
          cutoutPercentage: 95
        }}
      />
      <div style={textStyle()}>{capacity+'%'}</div>
    </div>
  )
};

const textStyle = () => ({
  width: '100%',
  height: '40px',
  position: 'absolute',
  top: '40%',
  left: 0,
  marginTop: '-30px',
  lineHeight: '19px',
  textAlign: 'center',
  zIndex: 999999999999999
})

export default Capacity;
