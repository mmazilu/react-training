import React, { Component } from 'react';

export default class Catalog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("=== rendering catalog");
        return (
            <span>Catalog</span>
        )
    }
}