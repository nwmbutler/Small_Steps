import React from 'react';
import "./Form.css";
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import GenericForm from './GenericForm'

export default class CalculateForm extends React.Component {

  render() {
    return (
      <GenericForm handleSubmit={this.props.handleSubmit}
      handleInputChange={this.props.handleInputChange}/>

    );
  }
}
