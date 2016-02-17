import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { requestCountries } from './actions/request_country';
import rootReducer from './reducers/index';
import promiseMiddleware from 'redux-promise';
import App from './components/app';

const loggerMiddleware = createLogger();

const store = applyMiddleware(promiseMiddleware, loggerMiddleware)(createStore);

// store.dispatch({type: 'REQUEST_COUNTRIES'})
// store.dispatch(requestCountries()).then(() =>
//   console.log(store.getState());
// )
// )
//

// var Globe = React.createClass({
//   componentDidMount: function() {
//     d3Globe.go();
// }

ReactDOM.render(
  <Provider store={ store(rootReducer) }>
    <App />
  </Provider>,
  document.querySelector('.container-fluid')
);
