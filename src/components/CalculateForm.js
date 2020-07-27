import React from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import GenericForm from './GenericForm';
import AirplaneForm from './AirplaneForm';

export default class CalculateForm extends React.Component {
  render() {
    if (this.props.mode == 'airplane') {
      return <AirplaneForm
      handleSubmit={this.props.handleSubmit}
      handleInputChange={this.props.handleInputChange}
      />
    }
    return (
      <GenericForm
        handleSubmit={this.props.handleSubmit}
        handleInputChange={this.props.handleInputChange}
      />
    );
  }
}
