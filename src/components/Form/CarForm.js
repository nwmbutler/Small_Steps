import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AutoCompleteOrigin from '../AutoCompleteOrigin'
import AutoCompleteDestination from '../AutoCompleteDestination'
export default class CarForm extends React.Component {
  render() {
    return (
      <div>
        <div>
        <h2>Car Calculator</h2>
      <ul>
     
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
    </div>
        

        <Form class="calculator">

        <AutoCompleteOrigin
        origin_result1 = {this.props.handleInputChange}
        origin_result2 = {this.props.handleInputChange2}
        placeholder = 'Choose Departure Location'
        name = 'origin'
        /><br />

        <AutoCompleteDestination
      origin_result1 = {this.props.handleInputChange}
      origin_result3 = {this.props.handleInputChange3}
      placeholder = 'Choose Arrival Location'
      name = 'destination'
      /><br />

        <Link to="/results">

        <Button variant="success" type="submit">

        Calculate

        </Button>

        </Link>

        </Form>

      </div>
    );
  }
}
