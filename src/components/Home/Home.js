import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {


    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({ type: 'GET_MOVIES' });
    }

    moveMovie = (movieClicked) => {
      //clicked movie image moves user to details with id
        console.log('Movie title clicked:', movieClicked.id);
        this.props.dispatch({ type: 'GET_DETAILS', payload: movieClicked});
        this.props.history.push('/details');
    }
    render() {
        // Renders the entire app on the DOM
        return (
            <div className="App">
                
                <ul>
                    {this.props.reduxState.movies.map((movie) => {
                        return (
                            <div key={movie.id}>
                                <span> <img src={movie.poster} alt={movie.title} onClick={() => this.moveMovie(movie)}/>
                                    <br />{movie.title}
                                    <br />{movie.description} </span>
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Home);
