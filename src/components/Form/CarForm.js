import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import AutoCompleteOrigin from '../AutoCompleteOrigin'
import AutoCompleteDestination from '../AutoCompleteDestination'
import { Link } from 'react-router-dom';
export default class CarForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Carbon Calculator</h2>

        <Form class="calculator">

        <AutoCompleteOrigin origin_result = {this.props.handleInputChange}/>

        <AutoCompleteDestination destination_result = {this.props.handleInputChange}/>

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
