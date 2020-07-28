import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';;

export default class AirplaneForm extends React.Component {
  render() {
    return (
      <div>
        <Form class="calculator" onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <h2>Carbon Calculator</h2>

            <Form.Control
              type="text"
              name="origin"
              placeholder="Choose Departure Airport "
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="destination"
              placeholder="Choose Arrival Airport"
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

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
