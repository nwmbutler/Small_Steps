import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
          <Link to="/">
            <Button variant="success">New Journey</Button>
          </Link>
        </Container>

        
        <br />
        <br />
        <div>
            <span class="d-block bg-white">
              Your carbon old footprint is: {this.props.originalresult}
            </span>
          </div>
        <Container>
          {this.props.result && (
          <div  >
            <span class="d-block bg-white">
              Your carbon new footprint is: {this.props.result}
            </span>
          </div>)}
        </Container>
        <Container>
          <a href = 'https://www.woodlandtrust.org.uk/support-us/give/donations/'>
            <Button variant="success">Donate</Button>
          </a>
        </Container>
      </div>
    );
  }
}