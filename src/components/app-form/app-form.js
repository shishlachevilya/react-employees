import React from 'react';

import './app-form.css';

class AppForm extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    hours: '',
    rate: ''
  };

  onChangeHandler = ({ target }) => {
    this.setState({
      [target.id]: target.value
    });
  };

  isEmptyValue = val => val === '';

  handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.values(this.state);

    if(values.some(this.isEmptyValue)) {
      alert('You must fill in all fields');
      return;
    }

    this.props.onAddNewPerson(this.state);

    this.setState({
      firstName: '',
      lastName: '',
      hours: '',
      rate: ''
    });
  };

  render() {
    return (
      <form
        className="form-row"
        onSubmit={ this.handleSubmit }
      >
        <div className="form-group col-md-6">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            value={ this.state.firstName }
            className="form-control"
            placeholder="Enter first name"
            onChange={ this.onChangeHandler }
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            value={ this.state.lastName }
            type="text"
            className="form-control"
            placeholder="Enter last name"
            onChange={ this.onChangeHandler }
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="hours">Hours</label>
          <input
            id="hours"
            type="number"
            value={ this.state.hours }
            className="form-control"
            placeholder="Enter hours"
            onChange={ this.onChangeHandler }
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="rate">Rate</label>
          <input
            id="rate"
            type="number"
            value={ this.state.rate }
            className="form-control"
            placeholder="Enter rate"
            onChange={ this.onChangeHandler }
          />
        </div>

        <button type="submit" className="btn btn-success btn-lg btn-block">Add new person</button>
      </form>
    );
  }
}

export default AppForm;
