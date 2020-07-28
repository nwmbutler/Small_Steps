import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
export default class DisplayResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parentfunction: this.props.handleSubmit,
      currentEmissionResult: '',
    };
  }
  componentDidMount() {
    const { handleSubmit } = this.props;
    handleSubmit();
    alert('mounted')
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
          <div>
            <span class="d-block bg-white">
              Your carbon footprint: {this.props.result}
            </span>
          </div>
        </Container>
      </div>
    );
  }
}
