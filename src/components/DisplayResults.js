import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
export default class DisplayResults extends React.Component {
  render() {
    return (

      <div class="display">
        <Container>
          <Button variant="success" onClick={this.props.handleSubmit}>New Journey</Button>
        </Container><br />
        <Container>
          <Button variant="success" onClick={this.props.handleButton}>See Alternatives</Button>
        </Container>
        <br />
        <Container>
          {this.props.currentEmissionResult ? (
            <div>
              <span class="d-block bg-white">Your carbon footprint: {this.props.currentEmissionResult}</span>
            </div>
          ) : (
              <div>
                <h3>Calculating your journey</h3>
              </div>
            )}
          {this.props.originalEmissionResult && (
          <div>
           <h3>Your old carbon footprint: {this.props.originalEmissionResult} </h3>
          </div>
          )}
        </Container>
      </div>

    );
  }
}
