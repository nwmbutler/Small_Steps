import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import CarForm from './Form/CarForm';
import AlternativesForm from './AlternativesForm.js';
import AirplaneForm from './Form/AirplaneForm';
import TrainForm from './Form/TrainForm';
import BusForm from './Form/BusForm';
import DisplayResults from './DisplayResults.js';
import Home2 from './Home2.js';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      mode: window.location.pathname,
      currentEmissionResult: '',
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

    this.setState({
      mode: window.location.pathname.substr(1),
    });
  };

  handleSubmit = (e) => {
    const { origin, destination, mode } = this.state;

    const journey = {
      origin,
      destination,
      mode,
    };
    this.callAPI(journey, 'http://localhost:5000/testAPI');
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
              <Home2
              />
            </Route>
            <Route exact path="/driving">
              <CarForm
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Route>
            <Route exact path="/plane">
              <AirplaneForm
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
              />
            
            </Route>
            <Route exact path="/train">
              <TrainForm
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Route>
            <Route exact path="/bus">
              <BusForm  handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}/>
            </Route>

            <Route exact path="/results">
              <DisplayResults
                handleSubmit={this.handleSubmit}
                result={this.state.currentEmissionResult}
              />
            </Route>
            <Route exact path="/alternatives">
              <AlternativesForm />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
