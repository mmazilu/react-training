import React, { Component } from 'react';
import  UserListing from './UserListing';
import { withRouter } from 'react-router';
import AddUser from "./AddUser";
import'./Users.css';
import userData from './data.json';

class Users extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    console.log(userData);
        return (
            <div>
                <AddUser />
                <div className="user_table">
                    <UserListing
                        data={userData}
                    />
                </div>
            </div>
        )
    }
}

export default Users;

