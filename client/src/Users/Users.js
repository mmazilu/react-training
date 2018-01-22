import React, { Component } from 'react';
import  UserListing from './UserListing';
import { withRouter } from 'react-router';
import AddUser from './AddUser';
import'./Users.css';
//import userData from './data.json';
import DeleteUser from "./DeleteUser";
import axios from 'axios';


const  usersURL = "http://localhost:3001/api/users";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {

        let self = this;

        axios.get(usersURL)
            .then(response => {
                self.setState({
                    users: response.data
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }


    render() {
    console.log(this.state.users);
        return (
            <div>
                <div>
                    <DeleteUser />
                    <AddUser />
                </div>
                <div className="user_table">
                    <UserListing
                        data={this.state.users}
                    />
                </div>
            </div>
        )
    }
}

export default Users;

