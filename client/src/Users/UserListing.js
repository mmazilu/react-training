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
                        <TableHeaderColumn>Name and Surname</TableHeaderColumn>
                        <TableHeaderColumn>Email</TableHeaderColumn>
                        <TableHeaderColumn>Link to profile</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                    this.props.data.map(users => {
                        return (
                            <TableRow key={"users-listing-row-"+users._id}>
                                <TableRowColumn>{users.name}</TableRowColumn>
                                <TableRowColumn>{users.email}</TableRowColumn>
                                <TableRowColumn><Link to={"/user/"+users._id}>Profile</Link></TableRowColumn>
                            </TableRow>);
                    })
                    }
                </TableBody>
            </Table>)
    }
}

export default withRouter(UserListing);