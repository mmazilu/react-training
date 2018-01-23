import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = {};
        let pathname = this.props.match.params.id;
        let displayUser = null;
        data.userData.forEach(function(element) {
            console.log(element.id == pathname);
            if(element.id == pathname){
                displayUser = element;
            }
        });

        return (
            <div>
                <Card>

                    <CardTitle
                        title={displayUser.name}
                        subtitle={displayUser.email}>
                    </CardTitle>
                    <CardText>

                    </CardText>
                    <CardActions>
                        <Link to="/users">
                            <FlatButton label="Back" />
                        </Link>
                        <FlatButton label="Delete" />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default User;