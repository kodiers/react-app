import React, {Component} from 'react';
import Radium from 'radium';

import './Person.css';

import Aux from '../../../hoc/Aux';

class Person extends Component {

  render() {
    const style = {
        '@media (min-width: 500px)': {
          width: '450px'
        }
    };
    return(
      <Aux>
        <div className='Person' style={style}>
          <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input type='text' onChange={this.props.changed} value={this.props.name}/>
        </div>
      </Aux>
    );
  }
}

export default Radium(Person);
