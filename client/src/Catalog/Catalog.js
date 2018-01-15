import React, { Component } from 'react';


import CatalogListing from './CatalogListing';

const tableData = [
    {id: 1,
    name:"gigi"},
    {id: 2,
    name:"gigi2"},
    {id: 3,
    name:"gigi3"},
    {id: 4,
    name:"gigi4"}
];
export default class Catalog extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        console.log("=== rendering catalog");
        return (
            <div>
                <span>Catalog</span>
                <CatalogListing data={tableData}/>
            </div>
        )
    }
}