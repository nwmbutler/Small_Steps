import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import axios from 'axios';
import CarForm from './Form/CarForm';
import AlternativesForm from './AlternativesForm.js';
import AirplaneForm from './Form/AirplaneForm';
import TrainForm from './Form/TrainForm';
import BusForm from './Form/BusForm';
import DisplayResults from './DisplayResults.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      mode: '',
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/plane">plane</Link>
          </li>
          <li>
            <Link to="/bus">bus</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <CarForm handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          
          />
          </Route>
          <Route exact path="/plane">
            <AirplaneForm />
          </Route>
          <Route exact path="/bus">
            <BusForm />
          </Route>

          <Route exact path="/results">
            <DisplayResults handleSubmit = {this.handleSubmit}
            result = {this.state.currentEmissionResult}
            />
          </Route>
          <Route exact path="/alternatives">
            <AlternativesForm
            />
          </Route>
        </Switch>
      </div>
    </Router>    
       
    );
  }
}





