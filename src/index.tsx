import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Login from './pages/login/login.page'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './pages/home/home';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={Login} />
      <Route path='/login' component={App} />
      <Route path='/home' component={Home} />
    </Router>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
