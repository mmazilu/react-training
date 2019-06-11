import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import './Users.css';

export default class DeleteUser extends React.Component {
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

    handleDeleteUser = () => {
        this.setState({
            open: false,
        })
        console.log(this.state);
    };

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
                label="Delete"
                primary={true}
                //disabled={true}
                type="Submit"
                onClick={this.handleDeleteUser}
            />,
        ];

        return (
            <div>
                <RaisedButton
                    label="Delete User"
                    onClick={this.handleOpen}
                    style={styles.buttons}
                    className="delete_user"
                    secondary={true}

                />
                <Dialog
                    title="Delete"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    Are you sure you want to delete those users?
                </Dialog>
            </div>
        );
    }

}