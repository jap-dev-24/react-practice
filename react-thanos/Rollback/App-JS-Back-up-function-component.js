import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {

  //constant declaration
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ]
  });

  const [otherState,setOtherState] = useState('some other value');



  console.log(personsState,otherState);

  //function for manipulation

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    //DONT DO THIS this.state.persons[0].name = 'Maximillian';
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ]
    });

    setOtherState({
      otherState:'Test it went'
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      ></Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      ></Person>
    </div>
  );
};

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
