import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AutoCompleteOrigin from '../AutoCompleteOrigin';
import AutoCompleteDestination from '../AutoCompleteDestination';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default class BusForm extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <h1 id="plane">Bus Travel Calculator</h1>
          </Row>

          <div className="links animate__animated animate__zoomIn">

            <Row className="justify-content-center">
              <Link to="/plane">
                <Button className="buttonLinkForm " variant="light">
                  <i class="fa fa-plane fa-2x" id="icon" aria-hidden="true"></i>
                </Button>
              </Link>
              <Link to="/driving">
                <Button className="buttonLinkForm " variant="light">
                  <i class="fa fa-car fa-2x" id="icon" aria-hidden="true"></i>
                </Button>
              </Link>
              <Link to="/train">
                <Button className="buttonLinkForm " variant="light">
                  <i class="fa fa-train fa-2x" id="icon" aria-hidden="true"></i>
                </Button>
              </Link>
            </Row>
            <Row className="justify-content-center">
              <Form class="calculator">
                <AutoCompleteOrigin
                  origin_result1={this.props.handleInputChange}
                  origin_result2={this.props.handleInputChange2}
                  placeholder="Choose Departure Bus Station"
                  name="origin"
                />
                <br />

                <AutoCompleteDestination
                  origin_result1={this.props.handleInputChange}
                  origin_result3={this.props.handleInputChange3}
                  placeholder="Choose Arrival Bus station"
                  name="destination"
                />
                <br />
                <Row className="justify-content-center">
                  <Link to="/results">
                    <Button variant="success" type="submit">
                      Calculate
            </Button>
                  </Link>
                </Row>
              </Form>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
