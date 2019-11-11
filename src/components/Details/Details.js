import React, { Component } from 'react';


class Details extends Component {

    componentDidMount(){
        
    }
  // Renders the entire app on the DOM
    goBack = (event) =>{
        // sends user to Home component when clicked
        event.preventDefault();
        console.log('Back clicked');
        this.props.history.push('/');
    }

  render() {
    return (
      <div className="App">
          <button onClick={this.goBack}>Back to List</button> <button>Edit</button>
        <p>Details Page</p>
        <br /> Displays movies selected from Home
        <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
      </div>
    );
  }
}

export default Details;