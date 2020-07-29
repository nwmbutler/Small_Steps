import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AutoCompleteOrigin from '../AutoCompleteOrigin'
import AutoCompleteDestination from '../AutoCompleteDestination'
export default class AirplaneForm extends React.Component {
  render() {
    return (
      <div>
      <h2>Carbon Calculator</h2>

      <Form class="calculator">

      <AutoCompleteOrigin
      origin_result1 = {this.props.handleInputChange}
      origin_result2 = {this.props.handleInputChange2}
      placeholder = 'Choose Departure Airport (UK)'
      name = 'origin'
      /><br />

      <AutoCompleteDestination
    origin_result1 = {this.props.handleInputChange}
    origin_result3 = {this.props.handleInputChange3}
    placeholder = 'Choose Arrival Airport (UK)'
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
