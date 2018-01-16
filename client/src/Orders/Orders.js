import React, { Component } from 'react';
import { withRouter } from 'react-router';
import OrdersListing from './OrdersListing';
import RaisedButton from 'material-ui/RaisedButton';
import Toolbar from 'material-ui/Toolbar';


class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [{ id: 1, order_name: 'order1' },
            { id: 2, order_name: 'order2' },
            { id: 3, order_name: 'order3' },
            { id: 4, order_name: 'order4' }
            ],
            new_order: ''
        };
        this.table_rows = [];
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getChecked = this.getChecked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    shouldComponentUpdate() {
        return true;
    }


    render() {
        console.log("=== rendering orders");
        console.log(this.state.orders);
        return (
            <div>
                <Toolbar style={{ alignItems: 'center' }}>
                    <span>Orders</span>
                    <p>New Order</p>
                    <input value={this.state.new_order || ''} onChange={this.handleChange} />
                    <div>
                        <RaisedButton label="Add Order" primary={true} onClick={this.handleAdd} />
                    </div>
                    <div>
                        <RaisedButton label="Delete" primary={true} onClick={this.handleDelete} />
                    </div>
                </Toolbar>
                <OrdersListing data={this.state.orders} getChecked={this.getChecked} />

            </div>
        )
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            new_order: event.target.value
        });
    }

    handleAdd() {
        let orders = this.state.orders;
        let name = this.state.new_order;
        let max_id = Math.max(...this.state.orders.map(item => item.id));
        orders.push({ id: max_id + 1, order_name: name });
        this.setState({
            orders: orders
        });
    }

    handleDelete() {
        console.log(this.table_rows);
        let local_orders = this.state.orders;
        let len = this.table_rows.length;
        if (this.table_rows !== 'all') {
            this.table_rows.forEach((row) => {
                local_orders.splice(row, 1);
                console.log(local_orders)
            });
        }
        else {
            local_orders = [];
        }
        this.table_rows = [];
        this.setState({
            orders: local_orders
        });

    }

    getChecked(rows) {
        this.table_rows = rows;
    }

}

export default withRouter(Orders)