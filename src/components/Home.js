import React from 'react';
import axios from 'axios';
import './Form.css';
import AlternativesForm from './AlternativesForm.js';
import DisplayResults from './DisplayResults.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      mode: '',
      transit_mode: null,
      currentEmissionResult: null,
      originalEmissionResult: null,
      showOriginalForm: true,
      showAlternativesForm: false,
      showResults: false,
    };
  }

  async callAPI(new_data, url) {
    const response = await axios.post(url, {
      posted_data: new_data,
    });
    console.log('Returned data:', response.data.distance);
    this.setState({ currentEmissionResult: response.data.distance });
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
      showOriginalForm: !this.state.showOriginalForm,
      showResults: true,
      originalEmissionResult: null,
    });
    const { origin, destination, mode } = this.state;

    const journey = {
      origin,
      destination,
      mode,
    };
    this.callAPI(journey, 'http://localhost:5000/testAPI');
    this.setState({
      mode: 'transit',
    });
  };

  handleButton = (e) => {
    e.preventDefault();
    this.setState({
      showAlternativesForm: !this.state.showAlternativesForm,
    });
  };

  alternativeSubmit = (e) => {
    // alert(this.state.mode);

    e.preventDefault();
    const { origin, destination, mode, transit_mode } = this.state;

    const journey = {
      origin,
      destination,
      mode,
      transit_mode,
    };
    this.setState({
      originalEmissionResult: this.state.currentEmissionResult,
    });
    // alert(this.state.originalEmissionResult);
    this.callAPI(journey, 'http://localhost:5000/transportAlternative');
    this.setState({
      showAlternativesForm: false,
      showResults: true,
    });
  };

  render() {
  

    if (this.state.showAlternativesForm) {
      return (
        <div>
          <div>
            <AlternativesForm
              alternativeSubmit={this.alternativeSubmit}
              handleInputChange={this.handleInputChange}
              transit_mode={this.state.transit_mode}
            />
          </div>
        </div>
      );
    }

    if (this.state.showResults) {
      return (
        <div>
          <div>
            <DisplayResults
              handleSubmit={this.handleSubmit}
              handleButton={this.handleButton}
              currentEmissionResult={this.state.currentEmissionResult}
              originalEmissionResult={this.state.originalEmissionResult}
            />
          </div>
        </div>
      );
    }
  }
}
