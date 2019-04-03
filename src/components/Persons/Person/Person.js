import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import './Person.css';
import withClassSecond from '../../../hoc/withClassSecond';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    return(
      <React.Fragment>
          {this.context.authenticated ? <p>Authenticated</p> : <p>Please login </p>}
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          type='text'
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}/>
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClassSecond(Radium(Person), 'Person');
