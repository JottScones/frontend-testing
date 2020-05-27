import React, { Component } from 'react';
import BarGraph from './components/charts/BarGraph';
import Capacity from './components/charts/Capacity';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      capacityData: {},
      barData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax call here
    this.setState({
      capacityData: {
        capacity: 40
      },
      barData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets:[{
          label:'Av capacity',
          data:[
            43,
            51,
            62,
            54,
            70,
            73,
            66
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }]
      }
    });
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Capacity capacityData={this.state.capacityData}/>
          <BarGraph barData={this.state.barData}/>
      </div>
    );
  }
}

export default App;
