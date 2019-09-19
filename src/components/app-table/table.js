import React from 'react';
import TableHead from '../app-table-head';
import TableBody from '../app-table-body';

import './table.css';

class Table extends React.Component {

  render() {

    const { peoples, onChangeHours, onChangeRate, onDeletePerson } = this.props;

    return (
      <table className="table table-striped">
        <TableHead/>

        <TableBody
          peoples={ peoples }
          onChangeHours={ onChangeHours }
          onChangeRate={ onChangeRate }
          onDeletePerson={ onDeletePerson }
        />
      </table>
    )
  }
}

export default Table;
