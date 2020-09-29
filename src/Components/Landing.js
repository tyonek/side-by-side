import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context';
import './landing.css';

class Landing extends Component {
  static contextType = Context;

  state = {
    productSearch: {
      value: "",
      touched: false
    }
  };

  productSearch = (e) => {
    e.preventDefault()
    const {search} = e.target;
    const results = {
      title: search.value,
    };
    this.context.setProducts(results);
    this.props.history.push('/productspage');
  };

  validateProductSearch() {
    const productSearch = this.state.productSearch.value.trim();
    if (productSearch.length === 0) {
      return "Must type product";
    };
  };

  render() {
    return (
      <main>
        
        {this.context.user ? (<>
          <button onClick={e => this.context.setUser(null)}>Logout</button>
        </>) : (<>
          <Link className="button__account" to='/accountsignin'>Sign In</Link>
          <Link className="button__account" to='/accountsignup'>Sign Up</Link>
        </>)}

        <form className="search" onSubmit={this.productSearch}>
          <div>
            <p className="welcome">Welcome to Side by Side, come view the best deals found by people trying to find the best deals, just like YOU!</p>
            <button type="submit" className="button" id='search'>View All Products</button>
          </div>
          <Link type="button" className="button" to='/postproduct'>Post Product</Link>
        </form>
        
        
      </main>
    );
  }
};

export default Landing;