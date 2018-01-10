import React, { Component } from 'react';

export default class Orders extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("=== rendering orders");
        return (
            <span>Orders</span>
        )
    }
}