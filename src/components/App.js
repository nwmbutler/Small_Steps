import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import CarForm from './Form/CarForm';
import AlternativesForm from './AlternativesForm.js';
import AirplaneForm from './Form/AirplaneForm';
import TrainForm from './Form/TrainForm';
import BusForm from './Form/BusForm';
import DisplayResults from './DisplayResults.js';
import Home2 from './Home2.js';
import DisplayResults2 from './DisplayResults2.js';
import { config } from '../Constants';

var url = config.url.API_URL;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      mode: window.location.pathname,
      transit_mode: null,
      currentEmissionResult: '',
      originalEmissionResult: null,

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
    // alert(this.state.destination)

    this.setState({
      mode: window.location.pathname.substr(1),
    });

  };

  handleInputChange2 = (description) => {
    this.setState({
      origin: description
    });
      console.log(description)
  }

  handleInputChange3 = (description) => {
    this.setState({
      destination: description
    });
    console.log(description)
  }


  handleSubmit = (e) => {
    var { origin, destination, mode } = this.state;

    if (mode === 'plane') {
      mode = 'walking'
    }

    const journey = {
      origin,
      destination,
      mode,
    };

    this.callAPI(journey, `${url}/testAPI`);
  };
  handleAlternativeSubmit = (input) => {
    // alert(this.state.mode);

    const { origin, destination, mode, transit_mode} = this.state;

    const journey = {
      origin,
      destination,
      mode,
      transit_mode
    };
    this.setState({
      originalEmissionResult: this.state.currentEmissionResult,
    });
    // alert(this.state.originalEmissionResult);
    this.callAPI(journey, `${url}/transportAlternative`);
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/driving">Car</Link>
            </li>
            <li>
              <Link to="/plane">Plane</Link>
            </li>
            <li>
              <Link to="/bus">Bus</Link>
            </li>
            <li>
              <Link to="/train">Train</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home2 />
            </Route>
            <Route exact path="/driving">
              <CarForm
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
                handleInputChange2={this.handleInputChange2}
                handleInputChange3={this.handleInputChange3}
              />
            </Route>
            <Route exact path="/plane">
              <AirplaneForm
              handleSubmit={this.handleSubmit}
              handleInputChange={this.handleInputChange}
              handleInputChange2={this.handleInputChange2}
              handleInputChange3={this.handleInputChange3}
              />
            </Route>
            <Route exact path="/train">
              <TrainForm
              handleSubmit={this.handleSubmit}
              handleInputChange={this.handleInputChange}
              handleInputChange2={this.handleInputChange2}
              handleInputChange3={this.handleInputChange3}
              />
            </Route>
            <Route exact path="/bus">
              <BusForm
              handleSubmit={this.handleSubmit}
              handleInputChange={this.handleInputChange}
              handleInputChange2={this.handleInputChange2}
              handleInputChange3={this.handleInputChange3}
              />
            </Route>

            <Route exact path="/results">
              <DisplayResults
                handleSubmit={this.handleSubmit}
                result={this.state.currentEmissionResult}
              />
            </Route>
            <Route exact path="/alternatives">
              <AlternativesForm handleInputChange={this.handleInputChange}/>
            </Route>
            <Route exact path="/resultsnew">
            <DisplayResults2
            alternativeSubmit = {this.handleAlternativeSubmit}
            result={this.state.currentEmissionResult}
            originalresult= {this.state.originalEmissionResult}

            />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
