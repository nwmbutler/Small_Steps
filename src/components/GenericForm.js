import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

export default class GenericForm extends React.Component {
  render() {
    return (
      <div>
        <Form class="calculator" onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <h2>Carbon Calculator</h2>

            <Form.Control
              type="text"
              name="origin"
              placeholder="Choose starting point..."
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="destination"
              placeholder="Choose destination..."
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Calculate
          </Button>
        </Form>
      </div>
    );
  }
}
