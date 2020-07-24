import React from 'react';
import axios from 'axios';


export default class AlternativesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false
  };
  }



  handleInputChange = e => {
    this.setState({

      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { origin, destination, mode } = this.state;

    const journey = {
      origin, destination, mode
    };

  }



  render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <h1>Carbon Calculator</h1><br />

        <select name = 'mode' onChange={this.handleInputChange} value={this.state.mode}>
        <option value="null" ></option>
        <option value="bus" >Bus</option>
        <option value="rail" >Rail</option>




      </select><br /><br />

          <button type="submit">
                See Alternatives
              </button>

              </form>

      );
    }
  }
