import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
          <Link to="/">
            <Button variant="success">New Journey</Button>
          </Link>
        </Container>
        <br />
        <Container>
          <Link to="/alternatives">
            <Button variant="success">See Alternatives</Button>
          </Link>
        </Container>
        <br />
        <Container>
          {this.props.distance}
          {this.props.result && (
            <div >
              <span class="d-block bg-white">
                Your carbon footprint: {this.props.result}
              </span>
            </div>
          )}
        </Container>
      </div>
    );
  }
}
