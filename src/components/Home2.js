import React from 'react';
import { Link } from 'react-router-dom';
export default class AirplaneForm extends React.Component {
  render() {
    return (<div>Welcome To Carbon footprint
      <ul>
      <li>
        <Link to="/driving">Car</Link>
      </li>
      <li>
        <Link to="/plane">Plane</Link>
      </li>
      <li>
        <Link to="/bus">Bus</Link>
      </li>
      <li>
        <Link to="/train">Train</Link>
      </li>
    </ul>
    </div>
    )
  }
}
