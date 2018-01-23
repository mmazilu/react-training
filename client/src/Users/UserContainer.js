import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';


class UserContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextField
                    name="name"
                    hintText="Name and Surname"
                    onChange={this.addInput}
                /><br />
                <TextField
                    name="email"
                    hintText="E-mail"
                    onChange={this.addInput}
                /><br />
            </div>
        );
    }
}

export default UserContainer;