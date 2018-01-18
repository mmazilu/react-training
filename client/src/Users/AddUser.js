import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import './Users.css';

export default class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            tableData: this.props
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
        })
    console.log(this.state);
    };

    addInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log('name' + ' ' + this.state.name);
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
                    backgroundColor="#a4c639"

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