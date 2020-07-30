import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
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
            <Card>
              <Card.Body class="d-block">
                <strong>The carbon footprint of your original journey was: </strong>
                {this.props.originalresult}
              </Card.Body>
            </Card>
          </Row>

          <Row className="justify-content-center animate__animated animate__zoomInDown animate__slower" id="displayResult">
            <Card>
              <Card.Body class="d-block">
                <strong>The carbon footprint of your alternative journey is: </strong>
                {this.props.result}
              </Card.Body>
            </Card>
          </Row>

          <Row className="justify-content-center animate__animated animate__zoomIn animate__delay-4s" id="displayResult">
            <a href='https://www.woodlandtrust.org.uk/support-us/give/donations/' target="_blank" rel="noopener noreferrer">
              <Button variant="success">Offset your emissions with the Woodland Trust</Button>
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