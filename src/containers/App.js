import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons : [
      {id:'1',  name : 'Max', age : 1},
      {id:'2', name : 'Manu', age :2},
      {id:'3', name : 'stephy', age :3}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('panakj test');
    //this.state.persons[0].name = 'kanti lal';
    this.setState({ 
    persons : [
      {name : newName, age : 1},
      {name : 'Manu', age :2},
      {name : 'stephy', age :3}
    ],
    showPerson : false });
  }

  nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person  = { ...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]  = person;
    this.setState({ persons : persons});  
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  togglePersonHandler = () => {
    const reverse = this.state.showPerson;
    this.setState({showPerson : !reverse});
  }


  render() {

    const style = {
      color : 'red'
    }

    let persons = null;
    if(this.state.showPerson)
    {
      persons = (
        <div>
          <Persons persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} /> 
        </div>
      )

      
    }
    return (
      <div className="App">
        <Cockpit clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
    //return React.createElement('div', { className:'App'}, React.createElement('h1', null, 'this is pankaj !!'));
  }
}

export default App;
