import React, { Component } from 'react';
import classesApp from './App.css';

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
      let persons = null;
      let btnClass = '';

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
        btnClass = classesApp.Red;
      }
      const classes = [];
      if (this.state.persons.length <= 2) {
        classes.push(classesApp.red);
      }
      if (this.state.persons.length <= 1) {
        classes.push(classesApp.bold);
      }
      return (
        <div className={classesApp.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working.</p>
          <button onClick={() => this.togglePersonsHandler()} className={btnClass}>Toggle persons</button>
          {persons}
        </div>
      );
  }
}

export default App;
