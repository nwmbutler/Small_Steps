import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
export default class DisplayResults2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parentfunction: this.props.handleAlternativeSubmit,
    };
  }
  componentDidMount() {
    const { alternativeSubmit } = this.props;
    alternativeSubmit();

  }

  render() {
    return (
      <div class="display">
        <Container>
          <Row className="justify-content-center animate__animated animate__zoomInDown animate__slow" id="displayResult">
            <span class="d-block bg-white">
              Your carbon old footprint is: {this.props.originalresult}
            </span>
          </Row>

          <Row className="justify-content-center animate__animated animate__zoomInDown animate__slower" id="displayResult">
            <span class="d-block bg-white">
              Your carbon new footprint is: {this.props.result}
            </span>
          </Row>

          <Row className="justify-content-center animate__animated animate__zoomIn animate__delay-4s" id="displayResult">
            <a href='https://www.woodlandtrust.org.uk/support-us/give/donations/' target="_blank" rel="noopener noreferrer">
              <Button variant="success">Donate</Button>
            </a>
          </Row>

          <Row className="justify-content-center animate__animated animate__zoomIn animate__delay-5s" id="displayResult">
            <Link to="/">
              <Button variant="success">New Journey</Button>
            </Link>
          </Row>


        </Container>
      </div>
    );
  }
}