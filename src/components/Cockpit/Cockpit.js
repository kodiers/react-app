import React, {useContext} from 'react';
import Radium from 'radium';

import './Cockpit.css';

import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

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
  if (props.personsLength <= 2) {
    classes.push('red');
  }
  if (props.personsLength <= 1) {
    classes.push('bold');
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working.</p>
      <button
        onClick={() => props.clicked()}
        style={style}>Toggle persons</button>
        <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Radium(cockpit));
