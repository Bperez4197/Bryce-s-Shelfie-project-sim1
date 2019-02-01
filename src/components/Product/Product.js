import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import '../../App.css';

function Product(props) {

    return (
        <div>
             <img src={props.productImg} />
            {props.productName}
            {props.productPrice} 
        </div>
    )
}

export default Product
