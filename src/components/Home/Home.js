import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({ type: 'GET_MOVIES' });
    }
    render() {
        // Renders the entire app on the DOM
        return (
            <div className="App">
                <p>Home Page</p>
                <br /><ul>
                    {this.props.reduxState.movies.map((movie) => {
                        return (
                            <li key={movie.id}>
                                <span>{movie.title}, {movie.poster} </span>
                            </li>
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
