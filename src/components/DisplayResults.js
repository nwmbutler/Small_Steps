import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
export default class DisplayResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parentfunction: this.props.handleSubmit,
    };
  }
  componentDidMount() {
    const { handleSubmit } = this.props;
    handleSubmit();
  }

  render() {
    return (
      <div class="display">
        <Container>
          <Row className="justify-content-center animate__animated animate__zoomInDown animate__slow" id="displayResult">
            <div>
              <span class="d-block bg-white">
                Your carbon footprint: {this.props.result}
              </span>
            </div>
          </Row>

          <Row className="justify-content-center animate__animated animate__zoomIn animate__delay-2s" id="displayResult">
            <Link to="/alternatives">
              <Button variant="success">See Alternatives</Button>
            </Link>
          </Row>

          <Row className="justify-content-center animate__animated animate__zoomIn animate__delay-3s" id="displayResult">
            <Link to="/">
              <Button variant="success">New Journey</Button>
            </Link>
          </Row>


        </Container>
      </div>
    );
  }
}
