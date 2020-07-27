import React from 'react';
import axios from 'axios';

export default class CalculateForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="origin"
            placeholder="Choose starting point..."
            onChange={this.props.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="destination"
            placeholder="Choose destination..."
            onChange={this.props.handleInputChange}
          />
          <br />
          <br />

          <select name="mode" onChange={this.props.handleInputChange}>
            <option value="null"></option>
            <option value="driving">Car</option>
            <option value="bicycling">Bike</option>
            <option value="walking">Walk</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
          </select>
          <br />
          <br />

          <button>Calculate</button>
        </form>
      </div>
    );
  }
}
