import React from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import GenericForm from './GenericForm';
import AirplaneForm from './AirplaneForm';
import TrainForm from './TrainForm';
import CarForm from './CarForm';
import BusForm from './BusForm';
export default class CalculateForm extends React.Component {
  render() {
    if (this.props.mode === 'airplane') {
      return <AirplaneForm
      handleSubmit={this.props.handleSubmit}
      handleInputChange={this.props.handleInputChange}
      />
    }
    else if (this.props.mode === 'train') {
    return (
      <TrainForm
        handleSubmit={this.props.handleSubmit}
        handleInputChange={this.props.handleInputChange}
      />
    );
    }
    else if (this.props.mode ==='driving') {
      return (
        <CarForm
          handleSubmit={this.props.handleSubmit}
          handleInputChange={this.props.handleInputChange}
        />
      );
    }
    else if (this.props.mode === 'bus') {
      return (
        <BusForm
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
