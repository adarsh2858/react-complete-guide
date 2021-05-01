import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";
import "./output.css";
class App extends Component {
  state = {
    persons: [
      { name: "Aditi", age: 19 },
      { name: "Mrinalini", age: 21 },
      { name: "Nilam", age: 52 },
    ],
    otherState: "Unchanged Value",
  };

  switchNameHandler = (newName) => {
    // console.log("Successfully clicked.")
    // DON'T DO THIS - this.state.persons[1].name = 'Adarsh'
    // console.log(this.state);
    this.setState({
      persons: [
        { name: newName, age: 19 },
        { name: "Adarsh", age: 22 },
        { name: "Nilam", age: 52 },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Adi", age: 20 },
        { name: "Ash", age: 22 },
        { name: event.target.value, age: 52 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1 className="t">Hey Adarsh here on the move.</h1>
        <p>It is working!</p>

        <button style={style} onClick={() => this.switchNameHandler("Oishi")}>
          Switch name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Oishi!")}
        >
          My Hobbies: Making Art pieces.
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          change={this.changeNameHandler}
        />
      </div>
    );
    // return React.createElement("div",{className:"App"},React.createElement("h1", null, "Hope it works!"))
  }
}

export default App;
