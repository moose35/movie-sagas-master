import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', firstMovie);
}

// Sagas
function* firstMovie(action) {
    // gets all movies sent from backend server and dispatches to client side
    try
    {const movieResponse = yield axios.get('/api/movies');
    yield put({ type: 'SET_MOVIES', payload: movieResponse.data });
     console.log('firstMovie was hit with action:', action);
    } catch(error){
        console.log('error fetching movies', error);
    }
  }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Reducers
const movies = (state = [], action) => {
    // Used to store movies returned from the server
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const genres = (state = [], action) => {
    // Used to store the movie genres
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    // Create one store that all components can use
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
