import React from 'react';

import './app-table-body.css';

class TableBody extends React.Component {

  state = {};

  render() {

    const { peoples, onChangeHours, onChangeRate, onDeletePerson } = this.props;

    const cells = peoples.map((el, index) => {
      const { id, firstName, lastName, hours, rate, total } = el;

      return (
        <tr key={ id }>
          <td>{ ++index }</td>
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
          <td>
            <button
              className="btn btn-danger"
              onClick={ () => onDeletePerson(id) }
            >
              delete
            </button>
          </td>
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
