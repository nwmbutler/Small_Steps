import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class AlternativesForm extends React.Component {
  render() {
    return (
      <div class="alternative">

        Choose your alternative transport mode
        <Form>
          <Form.Group controlId="transitMode">
            <Form.Control as="select" name='transit_mode' onChange={this.props.handleInputChange}
              value={this.props.transit_mode} >
              <option hidden >Transport Mode</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
            </Form.Control>
          </Form.Group>
          <Button variant="success" onClick={this.props.alternativeSubmit}>Calculate</Button>
        </Form>
      </div>
    );
  }
}
