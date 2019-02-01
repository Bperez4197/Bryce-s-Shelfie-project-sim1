import React, { Component } from 'react'
import Product from '../Product/Product';
import '../../App.css';
import axios from 'axios';

export class Dashboard extends Component {


    deleteProduct = (id) => {
        axios.delete(`/api/inventory/${id}`).then( () => {
            // window.location.reload();
            this.props.listAction();
        })
    }


    render() {


        return (
            <div>
                {this.props.inventory !== null ?
                    this.props.inventory.map(product => {
                        return <div className="listed-products inventory-list">
                            <Product identification={product.id}deleteAction={this.deleteProduct} productName={product.name} productPrice={product.price} productImg={product.img} />
                        </div>
                    }) : <div></div>
                }

            </div>
        )
    }
}

export default Dashboard
