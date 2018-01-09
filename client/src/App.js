import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header/Header';

import Catalog from './Catalog/Catalog';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <MuiThemeProvider>
              <div className="App">
                  <Header/>
                  <Route path="/catalog" component={Catalog}/>
              </div>
            </MuiThemeProvider>
        </Router>
    );
  }
}

export default App;
