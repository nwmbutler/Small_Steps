import React from 'react';
import Button from 'react-bootstrap/Button';


export default class AlternativesForm extends React.Component {
  render() {
    return (
      <div>

        Choose your alternative transport mode
        <select
          name="transit_mode"
          onChange={this.props.handleInputChange}
          value={this.props.transit_mode}
        >
          <option value="null"></option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
        </select>
        <br />
        <br />
        <Button variant="success" onClick={this.props.alternativeSubmit}>Calculate</Button>
      </div>
    );
  }
}
