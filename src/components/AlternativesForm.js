import React from 'react';


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
        <button onClick={this.props.alternativeSubmit}>Calculate</button>
      </div>
    );
  }
}
