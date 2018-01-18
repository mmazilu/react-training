import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header/Header';

import Catalog from './Catalog/Catalog';
import Product from './Product/Product';
import Orders from './Orders/Orders';
import Users from './Users/Users';
import User from './Users/User';

import {
    Router,
    Route
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <MuiThemeProvider>
                    <div className="App">
                        <Header/>
                        <Route path="/catalog" component={Catalog}/>
                        <Route path="/product" component={Product}/>
                        <Route exact path="/orders" component={Orders}/>
                        <Route exact path="/users" component={Users}/>
                        <Route exact path="/users/:id" component={User} />
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
