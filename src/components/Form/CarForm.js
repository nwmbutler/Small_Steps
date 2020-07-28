import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import DisplayResults from '../DisplayResults.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
export default class CarForm extends React.Component {
  render() {
    return (
      <div>
        <Form class="calculator" >
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
          <Form.Group controlId="dropDown">
            <Form.Control
              as="select"
              name="mode"
              onChange={this.props.handleInputChange}
            >
              <option hidden>Transport Mode</option>
              <option value="driving" selected>
                Car
              </option>
              <option value="bicycling">Bike</option>
              <option value="walking">Walk</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="airplane">Airplane</option>
            </Form.Control>
          </Form.Group>

          <Link to="/results">
            <Button  variant="success" type="submit">
              Calculate
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}
