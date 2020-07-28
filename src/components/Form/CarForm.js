import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Autocomplete from '../AutoComplete'
import { Link } from 'react-router-dom';
export default class CarForm extends React.Component {
  render() {
    return (
      <div>
        <Form class="calculator">
          <Form.Group controlId="formBasicEmail">
            <h2>Carbon Calculator</h2>

            <Form.Control
              type="text"
              name="origin"
              placeholder="Choose Departure Address "
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
      


          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="destination"
              placeholder="Choose Arrival Address"
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="dropDown"></Form.Group>

          <Link to="/results">
            <Button variant="success" type="submit">
              Calculate
            </Button>
          </Link>
          <Autocomplete icon = {this.props.handleInputChange} />
        </Form>
      </div>
    );
  }
}
