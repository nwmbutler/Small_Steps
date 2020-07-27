import React from 'react';

export default class DisplayResults extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleSubmit}>New Journey</button>
        <button onClick={this.props.handleButton}>See Alternatives</button>
        {this.props.apiResponse ? (
          <div>
            <h3>Your carbon footprint: {this.props.apiResponse} </h3>
          </div>
        ) : (
          <div>
            <h3>Calculating your journey</h3>
          </div>
        )}
      </div>
    );
  }
}
