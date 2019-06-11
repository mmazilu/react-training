import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Person from 'material-ui/svg-icons/social/person/';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import  './Header.css';

const CATALOG = "catalog";
const PRODUCTS = "products";
const ORDERS = "orders";
const USERS = "users";


class Header extends Component {

    render() {
        console.log("=== rendering");
        let active = null;
        //console.log(this.props);
        switch (this.props.location.pathname) {
            case "/product" : active = PRODUCTS;
                break;
            case "/catalog" : active = CATALOG;
                break;
            case "/orders" : active = ORDERS;
                break;
            case "/users" : active = USERS;
                break;
            default: active = null;
        }
        return (
            <AppBar
                iconClassNameRight="muidocs-icon-navigation-expand-more">

                <Link className="centered-button" to="/catalog">
                    <FlatButton
                        label="Catalog"
                        secondary={active===CATALOG}
                    />
                </Link>
                <Link className="centered-button" to="/product">
                    <FlatButton
                        label="Products"
                        secondary={active===PRODUCTS}
                    />
                </Link>
                <Link className="centered-button" to="/orders">
                    <FlatButton
                        label="Orders"
                        secondary={active===ORDERS}
                    />
                </Link>
                <Link className="users" to="/users">
                    <FlatButton
                        secondary={active===USERS}
                        icon={<Person/>}
                    >
                    </FlatButton>
                </Link>
            </AppBar>
        )
    }
}

export default withRouter(Header);