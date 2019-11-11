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

    editMovie = (event) =>{
        // sends user to Edit component when clicked
        event.preventDefault();
        console.log('Edit clicked');
        this.props.history.push('/edit');
    }

  render() {
    return (
      <div className="App">
          <button onClick={this.goBack}>Back to List</button> <button onClick={this.editMovie}>Edit</button>
        
        <h2>{this.props.reduxState.details.title}</h2>
        <br />{this.props.reduxState.details.description}
        <h2>Genre</h2>
        <p>{this.props.reduxState.genres.map((genre) => {
                        return (
                            <div key={genre.id}>
                                {genre.name}
                            </div>
                        );
                    })}
        
                    
        </p>
        
        <br />
        <pre>{JSON.stringify(this.props.reduxState.genres, null, 2)}</pre>
      </div>
    );
  }
}
const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Details);