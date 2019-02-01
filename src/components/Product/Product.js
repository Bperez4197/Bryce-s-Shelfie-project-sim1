import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import '../../App.css';

function Product(props) {

    return (
        <div>
             <img className="inventory-pic" src={props.productImg} />
             <div className="product-name">
           {props.productName}
           <div className="product-price">
           ${props.productPrice} 
           <div className="edit-delete">
               <button onClick={() => props.deleteAction(props.identification)}className="delete">Delete</button>
               <button className="edit">Edit</button>
           </div>
           </div>
           </div>
        </div>
    )
}

export default Product
