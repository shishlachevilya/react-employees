import React from 'react';

import './app-table-body.css';

class TableBody extends React.Component {

  state = {};

  render() {

    const { peoples, onChangeHours, onChangeRate } = this.props;

    const cells = peoples.map((el, index) => {
      const { id, firstName, lastName, hours, rate, total } = el;

      return (
        <tr key={ id }>
          <th>{ ++index }</th>
          <td>{ firstName }</td>
          <td>{ lastName }</td>
          <td>
            <input
              type="number"
              className="form-control"
              placeholder={ hours }
              value={ hours }
              onChange={ ({ target }) => onChangeHours(id, target.value) }
            />
          </td>
          <td>
            <input
              type="number"
              className="form-control"
              value={ rate }
              placeholder={ rate }
              onChange={ ({ target }) => onChangeRate(id, target.value) }
            />
          </td>
          <td>{ total }</td>
        </tr>
      )
    });


    return (
      <tbody>
      { cells }
      </tbody>
    )
  }
}

export default TableBody;
