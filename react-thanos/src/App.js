import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   //DONT DO THIS this.state.persons[0].name = 'Maximillian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Manu", age: 29 },
  //       { name: "Stephanie", age: 27 },
  //     ],
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // const person =  Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();

    //update state in immutable process (create new object based of the object to be referenced of changed)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>

        {persons}
      </div>
    );
  }
}

// return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does this work now?'))

export default App;

// state = {
//   persons: [
//     { name: "Max", age: 28 },
//     { name: "Manu", age: 29 },
//     { name: "Stephanie", age: 26 },
//   ],
//   otherState: "some other value",
// };

// switchNameHandler = () => {
//   // console.log('Was clicked!');
//   //DONT DO THIS this.state.persons[0].name = 'Maximillian';
//   this.setState({
//     persons: [
//       { name: "Maximilian", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 27 },
//     ],
//   });
// };

// render() {
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={this.switchNameHandler}>Switch Name</button>
//       <Person
//         name={this.state.persons[0].name}
//         age={this.state.persons[0].age}
//       ></Person>
//       <Person
//         name={this.state.persons[1].name}
//         age={this.state.persons[1].age}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={this.state.persons[2].name}
//         age={this.state.persons[2].age}
//       ></Person>
//     </div>
//   );
// }

/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          ></Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          ></Person> */
