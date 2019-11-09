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
                <ul>
                    {this.props.reduxState.movies.map((movie) => {
                        return (
                            <div key={movie.id}>
                                <span> <img src={movie.poster} />
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
