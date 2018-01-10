import React, { Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("=== rendering product");
        return (
            <span>Product</span>
        )
    }
}