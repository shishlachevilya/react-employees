import React from 'react';
import Header from '../app-header';
import Table from '../app-table';

import './app.css';

class App extends React.Component {

  state = {
    peoples: [
      { id: 1, firstName: 'Ivan', lastName: 'Ivanov', hours: 10, rate: 100, total: 1000 },
      { id: 2, firstName: 'Petya', lastName: 'Petrov', hours: 3, rate: 10, total: 30 },
      { id: 3, firstName: 'John', lastName: 'Week', hours: 100, rate: 100, total: 10000 }
    ]
  };

  change = (arr, id, num, propName1, propName2) => {
    if(num.length === '') {
      console.log('empty');
    }
    const index = arr.findIndex((el) => el.id === id);
    const oldPerson = arr[index];

    const parseNum = parseInt(num);

    const newPerson = {
      ...oldPerson, [propName1]: parseNum, total: oldPerson[propName2] * parseNum
    };

    const newPeoples = [
      ...arr.slice(0, index),
      newPerson,
      ...arr.slice(index + 1),
    ];

    return newPeoples;
  };

  onChangeHours = (id, num) => {
    this.setState(({ peoples }) => {
      return {
        peoples: this.change(peoples, id, num, 'hours', 'rate')
      }
    });
  };

  onChangeRate = (id, num) => {
    this.setState(({ peoples }) => {
      return {
        peoples: this.change(peoples, id, num, 'rate', 'hours')
      }
    });
  };

  render() {

    const { peoples } = this.state;

    return (
      <div className="app-wrap">
        <Header/>

        <Table
          peoples={ peoples }
          onChangeHours={ this.onChangeHours }
          onChangeRate={ this.onChangeRate }
        />
      </div>
    )
  }
}

export default App;
