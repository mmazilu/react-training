import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';




class OrdersListing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("==== listing did mount");
  }

  render() {
    if (this.props.data === null) {
      return <span>Loading</span>
    }
    return (
      <div>
        <Table multiSelectable={true} onRowSelection={this.props.getChecked}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {
                this.props.data.map(data => {
                return (
                  <TableRow key={"catalog-listing-row-" + data.id}>
                    <TableRowColumn>{data.id}</TableRowColumn>
                    <TableRowColumn>{data.order_name}</TableRowColumn>
                    <TableRowColumn><Link to={"/orders/" + data.id}>Edit</Link></TableRowColumn>
                  </TableRow>);
              })
            }
          </TableBody>
        </Table>

      </div>)
  }
}

export default withRouter(OrdersListing)