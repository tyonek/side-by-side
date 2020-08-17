import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Landing from './Components/Landing';
import AccountSignUp from './Components/AccountSignUp';
import AccountSignIn from './Components/AccountSignIn';
import PostProduct from './Components/PostProduct';
import ProductsPage from './Components/ProductsPage';
import SingleProduct from './Components/SingleProduct';
import Context from './Context';
import './App.css';


class App extends Component {
  state = {
    user: null,
    products: [],
  };

  setUser = (user) => {
    this.setState({
      user: user,
    })
  };
  setProducts = (product) => {
    this.setState({
      products: [...this.state.products, product],
    })
  };

  render() {
    const value = {
      user: this.state.user,
      products: this.state.products,
      setUser: this.setUser,
      setProducts: this.setProducts,
    };
    return (
      <main className='app'>
        <Context.Provider value={value}>
          <BrowserRouter>
            <Link className='header' to='/'><h1 className='header'>SIDE BY SIDE</h1></Link>
            <Route exact path="/" component={Landing} />
            <Route path="/accountsignup" component={AccountSignUp} />
            <Route path="/accountsignin" component={AccountSignIn} />
            <Route path="/postproduct" component={PostProduct} />
            <Route path="/productspage" component={ProductsPage} />
            <Route path="/product/:productId" component={SingleProduct} />
          </BrowserRouter>
        </Context.Provider>
      </main>
    );
  }
}

export default App;
