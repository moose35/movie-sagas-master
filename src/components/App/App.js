import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home.js';
import Details from '../Details/Details.js';
import Edit from '../Edit/Edit.js';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/edit" component={Edit} />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/edit">Edit</Link>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
