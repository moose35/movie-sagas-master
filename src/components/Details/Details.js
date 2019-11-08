import React, { Component } from 'react';


class Details extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
          <button>Back to List</button> <button>Edit</button>
        <p>Details Page</p>
        <br /> Displays movies selected from Home
      </div>
    );
  }
}

export default Details;