import React, { Component } from 'react';

import CatalogList from './CatalogList';

export default class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gigi: true,
            catalogs: [
                {
                    id:1,
                    produse:["a1", "a2"]
                },
                {
                    id:2,
                    produse:["b1", "b2"]
                },
                {
                    id:3,
                    produse:["c1", "c2"]
                }
            ]
        };
        this.changeCatalog = this.changeCatalog.bind(this);
    }

    changeCatalog() {
        // let newCat = this.state.catalogs;
        // this.state.catalogs.push({
        //     id:4,
        //     produse:["d1", "d2"]
        // });
        this.state.catalogs[0].produse[0]="zz";
        this.setState({gigi:false});

        // newCat.push({
        //     id:5,
        //     produse:["e1", "e2"]
        // });
    }

    render() {
        console.log("=== rendering catalog");
        return (
            <div>
                <span>Catalog</span>
                <CatalogList catalogs={this.state.catalogs} changeCatalog={this.changeCatalog}/>
            </div>
        )
    }
}