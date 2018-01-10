import React, { Component } from 'react';

export default class CatalogList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("=== catalogList mounted");
    }

    componentWillReceiveProps(nextProps) {
        console.log("=== catalogList received props");
    }

    render() {
        console.log("=== rendering catalog list");
        return (
            <div> {
                this.props.catalogs.map((produs)=>{
                    return (
                        <div>
                            <span>{produs.id}:{produs.produse[0]}</span>
                        </div>
                    )
                })
            }
            <span onClick={this.props.changeCatalog}>Insert</span>

            </div>
        )
    }
}