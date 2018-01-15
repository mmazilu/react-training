import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';

const CATALOG = "catalog";
const PRODUCTS = "products";
const ORDERS = "orders";


class Header extends Component {

    render() {
        console.log("=== rendering");
        let active = null;
        console.log(this.props);
        switch (this.props.location.pathname) {
            case "/product" : active=  PRODUCTS;
                break;
            case "/catalog" : active=  CATALOG;
                break;
            case "/orders" : active = ORDERS;
                break;
            default: active = null;
        }
        return (
            <AppBar
                iconClassNameRight="muidocs-icon-navigation-expand-more">

                <Link to="/catalog">
                    <FlatButton
                        label="Catalog"
                        secondary={active===CATALOG}
                    />
                </Link>
                <Link to="/product">
                    <FlatButton label="Products" secondary={active===PRODUCTS}/>
                </Link>
                <Link to="/orders">
                    <FlatButton label="Orders" secondary={active===ORDERS}/>
                </Link>
            </AppBar>
        )
    }
}

export default withRouter(Header);