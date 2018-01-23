import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header/Header';

import Catalog from './Catalog/Catalog';
import Product from './Product/Product';
import Orders from './Orders/Orders';
import Users from './Users/Users';
import User from './Users/User';
import UserContainer from './Users/UserContainer';

import {
    Router,
    Switch,
    Route
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {


    componentWillMount(){
        window.current = 6;
        window.components = [];
    }
  
    render() {
        return (
            <Router history={history}>
                <MuiThemeProvider>
                    <div className="App">

                        <Header/>
                        <Switch>
                            <Route path="/catalog" component={Catalog}/>
                            <Route path="/product" component={Product}/>
                            <Route exact path="/orders" component={Orders}/>
                            <Route exact path="/users/create" component={UserContainer} />
                            <Route exact path="/user/:id" component={UserContainer} />
                            <Route exact path="/users" component={Users}/>
                        </Switch>

                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
