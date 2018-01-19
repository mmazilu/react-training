import React, { Component } from 'react';
import { withRouter } from 'react-router';
import OrdersListing from './OrdersListing';
import RaisedButton from 'material-ui/RaisedButton';
import Toolbar from 'material-ui/Toolbar';

import axios from 'axios';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: null,
            requestTs: null
        };
        this.table_rows = [];
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getChecked = this.getChecked.bind(this);
        this.handleChange = this.handleChange.bind(this);


        this.handleLoad = this.handleLoad.bind(this);
        console.log("=== constructor");
    }

    componentDidMount() {
        console.log(" ===== orders did mount");

        this.setState({requestTs: new Date().getTime()}, this.handleLoad);
        // this.currentTs = new Date().getTime();
        window.components.push({ts: this.currentTs, id: window.current, obj: this})
    }

    handleLoad() {
        this.url = "/api/orders.json?ts="+this.state.requestTs;
        axios
            .get("/api/orders.json?ts="+this.state.requestTs)
            .then((response) => {
                setTimeout(()=>{
                    console.log("====== checking");
                    console.log(response.config.url);
                    console.log(this.url);
                    window.current--;
                    if (response.config.url!==this.url) {
                        console.log("Ignoring OOO - ");
                        console.log(window.components);
                        return;
                    }
                    console.log(" ===== orders setting state");
                    console.log(window.current);
                    console.log(window.components);
                    response.data.push({id: window.current, order_name: "OOR" + window.current});
                    this.setState({orders: response.data});
                }, 1000 * window.current * 2)
            });
    }

    componentWillUnmount() {
        this.setState({requestTs: 0});
        // console.log("unmounting - " + this.currentTs);
    }

    render() {
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