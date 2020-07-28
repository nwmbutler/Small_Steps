import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default class AlternativesForm extends React.Component {
  render() {
    return (
      <div class="alternative">
        Choose your alternative transport mode
        <Form>
          <Form.Group controlId="transitMode">
            <Form.Control
              as="select"
              name="transit_mode"
              onChange={this.props.handleInputChange}
            >
              <option>Transport Mode</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
            </Form.Control>
          </Form.Group>
          <Link to="/resultsnew">
            <Button variant="success" type="submit">
              Calculate
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}
