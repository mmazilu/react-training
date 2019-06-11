import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';

import  UserListing from './UserListing';
import { withRouter } from 'react-router';
import AddUser from './AddUser';
import'./Users.css';
import DeleteUser from "./DeleteUser";
import userApi from './../api/user.api';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: false
        }
    }

    componentDidMount() {

        // let self = this;

        userApi.getUsers()
            .then(users => {
                this.setState({
                    users: users
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data');
                if (error.status === 404) {
                    this.setState({error:true});
                }
            });
    }

    handleAddUser = ()=> {
        userApi
            .addUser({name: "test1", email: "test1@test.com"})
            .then(res => {
                console.log(res);
            });
    };


    render() {
    console.log(this.state.users);
        return (
            <div>
                <div>
                    <Link className="users" to="/users/create">
                        <FlatButton primary>
                            Add user
                        </FlatButton>
                    </Link>
                </div>
                {this.state.error ? <span>messa ussa error</span> :
                    <div className="user_table">
                        <UserListing
                            data={this.state.users}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Users;

