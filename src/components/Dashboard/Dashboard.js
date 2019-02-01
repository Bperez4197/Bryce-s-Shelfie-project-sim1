import React, { Component } from 'react'
import Product from '../Product/Product';
import '../../App.css';

export class Dashboard extends Component {


  render() {
    let inventoryList = this.props.inventory.map(product => {
        return <div className="listed-products">
             <Product productName={product.name} productPrice={product.price} productImg={product.img}/> 
        </div>
    });

    return (
      <div>
        {inventoryList}
        
      </div>
    )
  }
}

export default Dashboard
