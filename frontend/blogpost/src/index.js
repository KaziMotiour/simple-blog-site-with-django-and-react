import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthReducer from './store/Reducers.js/authReducer'
import CRUDReducer from './store/Reducers.js/CRUDReducer'
import {createStore, applyMiddleware, compose,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
  auth:AuthReducer,
  CRUD: CRUDReducer
})


const logger = store => {
  return next =>{
    return action =>{
        console.log('[middleware] dipatching', action)
        const result = next(action)
          console.log('[middleware] next state', store.getState())
        return result
    }
  }
} 

const  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(RootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
