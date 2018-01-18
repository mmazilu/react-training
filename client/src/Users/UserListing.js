import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class UserListing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);

        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name and Surname</TableHeaderColumn>
                        <TableHeaderColumn>Email</TableHeaderColumn>
                        <TableHeaderColumn>Admin</TableHeaderColumn>
                        <TableHeaderColumn>Link to profile</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                    this.props.data.userData.map(data => {
                        return (
                            <TableRow key={"users-listing-row-"+data.id}>
                                <TableRowColumn>{data.id}</TableRowColumn>
                                <TableRowColumn>{data.name}</TableRowColumn>
                                <TableRowColumn>{data.email}</TableRowColumn>
                                <TableRowColumn>{data.isAdmin}</TableRowColumn>
                                <TableRowColumn><Link to={"/users/"+data.id}>Profile</Link></TableRowColumn>
                            </TableRow>);
                    })
                    }
                </TableBody>
            </Table>)
    }
}

export default withRouter(UserListing);