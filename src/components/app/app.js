import React from 'react';
import Header from '../app-header';
import Table from '../app-table';
import AppForm from '../app-form';

import './app.css';

class App extends React.Component {

  state = {
    peoples: [
      { id: 1, firstName: 'Ivan', lastName: 'Ivanov', hours: 10, rate: 100, total: 1000 },
      { id: 2, firstName: 'Petya', lastName: 'Petrov', hours: 3, rate: 10, total: 30 },
      { id: 3, firstName: 'John', lastName: 'Week', hours: 100, rate: 100, total: 10000 }
    ]
  };

  count = 100;

  change = (arr, id, num, propName) => {
    const parseNum = parseFloat(num) || 0;

    if (parseNum < 0) return arr;

    const index = arr.findIndex((el) => el.id === id);
    const oldPerson = arr[index];

    let newPerson = {
      ...oldPerson, [propName]: parseNum,
    };

    newPerson.total = newPerson.rate * newPerson.hours;

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
        peoples: this.change(peoples, id, num, 'hours')
      }
    });
  };

  onChangeRate = (id, num) => {
    this.setState(({ peoples }) => {
      return {
        peoples: this.change(peoples, id, num, 'rate')
      }
    });
  };

  onAddNewPerson = (person) => {
    this.setState(({ peoples }) => {
      const newPerson = {
        id: ++this.count,
        ...person
      };

      newPerson.total = newPerson.rate * newPerson.hours;

      const newPeoples = [
        ...peoples,
        newPerson
      ];

      return {
        peoples: newPeoples
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

        <AppForm onAddNewPerson={ this.onAddNewPerson }/>
      </div>
    )
  }
}

export default App;
