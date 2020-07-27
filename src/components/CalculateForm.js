import React from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import GenericForm from './GenericForm';
import AirplaneForm from './AirplaneForm';
import TrainForm from './TrainForm';
export default class CalculateForm extends React.Component {
  render() {
    if (this.props.mode == 'airplane') {
      return <AirplaneForm
      handleSubmit={this.props.handleSubmit}
      handleInputChange={this.props.handleInputChange}
      />
    }
    else if (this.props.mode == 'train') {
    return (
      <TrainForm
        handleSubmit={this.props.handleSubmit}
        handleInputChange={this.props.handleInputChange}
      />
    );
    }
    else {
      return (
      <GenericForm
        handleSubmit={this.props.handleSubmit}
        handleInputChange={this.props.handleInputChange}
      />
      )
    }

  }
}
