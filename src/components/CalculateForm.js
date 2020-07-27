import React from 'react';
import './Form.css';
import GenericForm from './Form/GenericForm';
import AirplaneForm from './Form/AirplaneForm';
import TrainForm from './Form/TrainForm';
import CarForm from './Form/CarForm';
import BusForm from './Form/BusForm';
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
