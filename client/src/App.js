import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header/Header';

import Catalog from './Catalog/Catalog';
import Product from './Product/Product';
import Orders from './Orders/Orders';

import {
    Router,
    Route
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
  render() {
      console.log("render main app");
    return (
        <Router history={history}>
            <MuiThemeProvider>
              <div className="App">
                  <Header/>
                  <Route path="/catalog" component={Catalog}/>
                  <Route path="/product" component={Product}/>
                  <Route path="/orders" component={Orders}/>
              </div>
            </MuiThemeProvider>
        </Router>
    );
  }
}

export default App;
