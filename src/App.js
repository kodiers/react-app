import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        {name: "Max", age: 28, id: 'sadsad'},
        {name: "Manu", age: 29, id: 'sadsa2d'},
        {name: "Stepanie", age: 26, id: 'sadssaad'}
      ],
    otherState: 'some state',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p => {
      return p.id === id;
    }));
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
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
      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}/>;
            })}
          </div>
        );
      }
      return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working.</p>
          <button onClick={() => this.togglePersonsHandler()} style={style}>Toggle persons</button>
          {persons}
        </div>
      );
  }
}

export default App;
