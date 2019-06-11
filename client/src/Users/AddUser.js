import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import './Users.css';
import axios from 'axios';

export default class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            //tableData: this.props
        };
    }

    handleOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    handleAddUser = () => {
        this.setState({
            open: false,
        });

        let insertData = this.state;
        console.log("=================", this.state);
        axios.post('http://localhost:3001/api/users', {
            //data: {
                data: insertData

            //},
        })

            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    addInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const styles = {
            buttons: {
                margin: 12,
                cursor: 'pointer'
            },

            textField: {
                width: 450,
            }

        }

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Add User"
                primary={true}
                //disabled={true}
                type="Submit"
                onClick={this.handleAddUser}
            />,
        ];

        return (
            <div>
                <RaisedButton
                    label="Add user"
                    onClick={this.handleOpen}
                    style={styles.buttons}
                    className="add_user"
                    primary={true}

                />
                <Dialog
                    title="Add new user"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <div className="input_box">
                        <TextField
                            name="name"
                            style={styles.textField}
                            hintText="Name and Surname"
                            onChange={this.addInput}
                        /><br />
                        <TextField
                            name="email"
                            style={styles.textField}
                            hintText="E-mail"
                            onChange={this.addInput}
                        /><br />
                    </div>
                </Dialog>
            </div>
        );
    }

}