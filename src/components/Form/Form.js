import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';

export class Form extends Component {

    constructor(props){
        super(props)
        this.state= {
            name: '',
            price: 0,
            img: ''
        }
        this.handleChangedImg = this.handleChangedImg.bind(this);
        this.handleChangedName = this.handleChangedName.bind(this);
        this.handleChangedPrice = this.handleChangedPrice.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    handleChangedName(e){
        this.setState({
            name: e.target.value
        })
    }

    handleChangedPrice(e){
        this.setState({
            price: e.target.value
        })
    }

    handleChangedImg(e){
        this.setState({
            img: e.target.value
        })
    }

    handleCancel(){
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    addProduct(name,price,img){
        axios.post('/api/product', {name,price,img}).then(response => {
            let {name,price,img} = this.state;
            this.props.inventory.push(name,price,img);
            this.props.listAction();

        })
    }


  render() {
      
    return (
      <div className="add-products">
          <img src="https://3ie87c2dond928rt2e2zzo8o-wpengine.netdna-ssl.com/wp-content/themes/gonzo/images/no-image-featured-image.png" className="no-pic" />
          <h3>Image URL:</h3>
        <input onChange={this.handleChangedImg}></input>
        <h3>Product Name:</h3>
        <input onChange={this.handleChangedName}></input>
        <h3>Price:</h3>
        <input onChange={this.handleChangedPrice} placeholder="0"></input>
        <div className="button">
        <button className="cancel-button" onClick={()=>this.handleCancel}>Cancel</button>
        <button onClick={() => this.addProduct(this.state.name,this.state.price,this.state.img) }className="add-button">Add to Inventory</button>
        </div>
      </div>
    )
  }
}

export default Form
