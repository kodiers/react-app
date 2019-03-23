import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        {name: "Max", age: 28},
        {name: "Manu", age: 29},
        {name: "Stepanie", age: 26}
      ],
    otherState: 'some state'
  };

  switchNameHandler = (newName) => {
    this.setState({
        persons: [
            {name: newName, age: 28},
            {name: "Manu", age: 29},
            {name: "Stepanie", age: 27}
        ]
    });
  };

  nameChangedHandler = (event) => {
      this.setState({
          persons: [
              {name: 'Max', age: 28},
              {name: event.target.value, age: 29},
              {name: "Stepanie", age: 28}
          ]
      });
  };

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };
      return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working.</p>
                <button onClick={() => this.switchNameHandler('Maximilan')} style={style}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}
                    click={this.switchNameHandler.bind(this, 'Max!')}>My hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
      );
  }
}

export default App;
