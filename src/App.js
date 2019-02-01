import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      inventory: []
    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  };

  getProducts() {
    axios.get('/api/inventory').then(response => {
      console.log(response);
      this.setState({
        inventory: response.data
      });
    });
  }


  render() {
    return (
      <div >
      <Header />
      <div className="body">
        <Dashboard listAction={this.getProducts} inventory={this.state.inventory} />
        <Form listAction={this.getProducts} inventory={this.state.inventory}/>
        </div>
      </div>
    );
  }
}

export default App;
