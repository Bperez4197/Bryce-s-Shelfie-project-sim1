import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      inventory: [{name:"Shoes",img:'https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$',price: '$20'},{name:"Backpack",img:'https://cdn.shopify.com/s/files/1/0851/3262/products/SCBP_BLCK_0000_01-update_1024x1024.jpg?v=1533162540',price: '$50'}]
    }
  }


  render() {
    return (
      <div >
      <Header />
      <div className="body">
        <Dashboard inventory={this.state.inventory} />
        <Form />
        </div>
      </div>
    );
  }
}

export default App;
