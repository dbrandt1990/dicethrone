import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { manageDice, manageUsers, manageGame } from './reducers/diceReducer';

const rootReducer = combineReducers({ manageDice, manageUsers, manageGame })
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


