import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default class CatalogListing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("=== rendering catalog listing");

        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        this.props.data.map(data => {
                             return (
                                <TableRow key={"catalog-listing-row-"+data.id}>
                                    <TableRowColumn>{data.id}</TableRowColumn>
                                    <TableRowColumn>{data.name}</TableRowColumn>
                                    <TableRowColumn><Link to={"/catalog/"+data.id}>Edit</Link></TableRowColumn>
                                </TableRow>);
                        })
                    }
                </TableBody>
            </Table>)
    }
}