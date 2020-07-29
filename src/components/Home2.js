import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
export default class AirplaneForm extends React.Component {
  render() {
    return (
      <div>
        <Container>
        <Row className="justify-content-center">
          <h1 id="plane">
            Welcome To Carbon footprint
          </h1>
        </Row>
        
        {/* <div className="links animate__animated animate__zoomIn"> */}
          
            <Row className="justify-content-center">
              <Link to="/driving">
              <Button className="buttonLink " variant="light">
              <i class="fa fa-car fa-2x" id = 'icon' aria-hidden="true" ></i>
              </Button>
              </Link>
              <Link to="/plane">
                <Button className="buttonLink" variant="light">
                  <i class="fa fa-plane fa-2x" id= 'icon' aria-hidden="true"></i>
                </Button>
              </Link>
              <Link to="/bus">
                <Button className="buttonLink" variant="light">
                <i class="fa fa-bus fa-2x" id = 'icon' aria-hidden="true"></i>
                </Button>
              </Link>
              <Link to="/train">
                <Button className="buttonLink" variant="light">
                <i class="fa fa-train fa-2x" id = 'icon' aria-hidden="true"></i>
                </Button>
              </Link>
            </Row>
          </Container>
          
        {/* </div> */}
      </div>
    );
  }
}
