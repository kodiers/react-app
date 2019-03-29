import React, {Component} from 'react';

import Person from "./Person/Person";

class Persons extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('persons should update');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('persons should get snapshot update');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('persons should did update');
  }

  render() {
    console.log('persons render');
    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
        click={() => this.props.clicked(index)}/>;
    });
  }

}

export default Persons;
