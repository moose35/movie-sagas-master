import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    // componentDidMount(){
    //     this.getDetails();
    // }
    
    // getDetails = () => {
    //     this.props.dispatch({ type: 'GET_DETAILS' });
    // }

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
        
        <h2>{this.props.reduxState.details.title}</h2>
        <br />{this.props.reduxState.details.description}
                    
        
        
        <br />
        <pre>{JSON.stringify(this.props.reduxState.details, null, 2)}</pre>
      </div>
    );
  }
}
const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Details);