import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import {Link} from 'react-router-dom';

const CATALOG = "catalog";
const PRODUCTS = "products";
const ORDERS = "orders";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.catalogClick = this.catalogClick.bind(this);
        this.productsClick = this.productsClick.bind(this);
        this.ordersClick = this.ordersClick.bind(this);

        this.state = {
            active: null
        };

        console.log("=== constructor");
    }

    catalogClick() {
        console.log("catalog click");
        this.setState({active:CATALOG})
    }
    productsClick() {
        console.log("catalog click");
        this.setState({active:PRODUCTS})
    }
    ordersClick() {
        console.log("catalog click");
        this.setState({active:ORDERS})
    }

    componentWillMount() {
        console.log("=== will mount");
    }

    componentDidMount() {
        console.log("=== did mount");
        console.log(window.location);
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log("=== received props");
    }

    componentWillUnmount() {
        console.log("=== will unmount");
    }

    render() {
        console.log("=== rendering");
        console.log(this.props);
        console.log(window.location.pathname);
        return (
            <AppBar
                iconClassNameRight="muidocs-icon-navigation-expand-more">

                <Link to="/catalog">
                    <FlatButton
                        label="Catalog"
                        secondary={this.state.active===CATALOG}
                        onClick={this.catalogClick}
                    />
                </Link>
                <Link to="/product">
                    <FlatButton label="Products" secondary={this.state.active===PRODUCTS} onClick={this.productsClick}/>
                </Link>
                <Link to="/orders">
                    <FlatButton label="Orders" secondary={this.state.active===ORDERS} onClick={this.ordersClick}/>
                </Link>
            </AppBar>
        )
    }
}