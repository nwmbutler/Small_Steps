import React from 'react';
import axios from 'axios';
import './Form.css';
import AlternativesForm from './AlternativesForm.js';
import DisplayResults from './DisplayResults.js';
export default class CalculateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      mode: '',
      transit_mode: null,
      apiResponse: '',
      submitted: false,
      alternatives: false,
    };
  }

  async callAPI(new_data) {
    const response = await axios.post('http://localhost:5000/testAPI', {
      posted_data: new_data,
    });
    console.log('Returned data:', response.data.distance);
    this.setState({ apiResponse: response.data.distance });
  }
  catch(e) {
    console.log(`Axios request failed: ${e}`);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: !this.state.submitted,
    });
    const { origin, destination, mode } = this.state;

    const journey = {
      origin,
      destination,
      mode,
    };
    this.callAPI(journey);
    this.setState({
      mode: 'transit',
    });
  };

  handleButton = (e) => {
    e.preventDefault();
    this.setState({
      alternatives: !this.state.alternatives,
    });
  };

  alternativeSubmit = (e) => {
    alert(this.state.mode);
    e.preventDefault();
    this.setState({
      apiResponse: null,
      mode: 'transit',
    });
  };

  render() {
    if (this.state.submitted === false) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="origin"
            placeholder="Choose starting point..."
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="destination"
            placeholder="Choose destination..."
            onChange={this.handleInputChange}
          />
          <br />
          <br />

          <select
            name="mode"
            onChange={this.handleInputChange}
            value={this.state.mode}
          >
            <option value="null"></option>
            <option value="driving">Car</option>
            <option value="bicycling">Bike</option>
            <option value="walking">Walk</option>
          </select>
          <br />
          <br />

          <button>Calculate</button>
        </form>
      );
    } else {
      if (this.state.alternatives === false) {
        return (
          <div>
            <DisplayResults
              handleSubmit={this.handleSubmit}
              handleButton={this.handleButton}
              apiResponse={this.state.apiResponse}
            />
          </div>
        );
      } else {
        return (
          <div>
            <AlternativesForm
              alternativeSubmit={this.alternativeSubmit}
              handleInputChange={this.handleInputChange}
              transit_mode={this.state.transit_mode}
            />
          </div>
        );
      }
    }
  }
}
