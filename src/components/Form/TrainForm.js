import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import {
BrowserRouter as Router,
Switch,
Route,
Link,
useRouteMatch,
useParams,
} from 'react-router-dom';
export default class TrainForm extends React.Component {
  render() {
    return (
      <div>
        <Form class="calculator" onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <h2>Carbon Calculator</h2>

            <Form.Control
              type="text"
              name="origin"
              placeholder="Choose Departure Train Station "
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="destination"
              placeholder="Choose Arrival Train Station"
              onChange={this.props.handleInputChange}
            />
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