import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default class AlternativesForm extends React.Component {
  render() {
    return (
      <div class="alternative">
        <Container>
          <Row className="justify-content-center" id="displayResult">
            <h3 id="formAlt">Choose your alternative transport mode</h3>
          </Row>

          <Row className="justify-content-center" id="displayResult">
            <Form>
              <Form.Group controlId="transitMode">
                <Form.Control
                  as="select"
                  name="transit_mode"
                  onChange={this.props.handleInputChange}
                >
                  <option>Transport Mode</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                </Form.Control>
              </Form.Group>

              <Row className="justify-content-center" id="displayResult">
                <Link to="/resultsnew">
                  <Button variant="success" type="submit">
                    Calculate
                  </Button>
                </Link>
              </Row>
            </Form>
          </Row>
        </Container>
      </div >
    );
  }
}
