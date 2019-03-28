import React from 'react';
import Radium from 'radium';

import './Cockpit.css';

const cockpit = (props) => {
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };
  style.backgroundColor = 'red';
  style[':hover'] = {
    backgroundColor: 'salmon',
    color: 'black'
  };
  const classes = [];
  if (props.persons.length <= 2) {
    classes.push('red');
  }
  if (props.persons.length <= 1) {
    classes.push('bold');
  }
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working.</p>
      <button onClick={() => props.clicked()} style={style}>Toggle persons</button>
    </div>
  );
};

export default Radium(cockpit);
