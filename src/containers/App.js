import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {

  state = {
    persons: [
        {name: "Max", age: 28, id: 'sadsad'},
        {name: "Manu", age: 29, id: 'sadsa2d'},
        {name: "Stepanie", age: 26, id: 'sadssaad'}
      ],
    otherState: 'some state',
    showPersons: false,
    changeCounter: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('app componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('app shouldComponentUpdate');
    return true;
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  };

  render() {
      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
              isAuthenticated={this.state.authenticated}/>
          </div>
        );
      }

      return (
        <StyleRoot>
          <WithClass classes={"App"}>
            <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
              <Cockpit
                persons={this.state.persons}
                title={this.props.appTitle}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonsHandler}/>
              {persons}
            </AuthContext.Provider>
          </WithClass>
        </StyleRoot>
      );
  }
}

export default Radium(App);
