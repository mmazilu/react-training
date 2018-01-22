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
            <Table multiSelectable={true}>
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
                    this.props.data.map(users => {
                        return (
                            <TableRow key={"users-listing-row-"+users.id}>
                                <TableRowColumn>{users.id}</TableRowColumn>
                                <TableRowColumn>{users.name}</TableRowColumn>
                                <TableRowColumn>{users.email}</TableRowColumn>
                                <TableRowColumn>{users.isAdmin}</TableRowColumn>
                                <TableRowColumn><Link to={"/users/"+users.id}>Profile</Link></TableRowColumn>
                            </TableRow>);
                    })
                    }
                </TableBody>
            </Table>)
    }
}

export default withRouter(UserListing);