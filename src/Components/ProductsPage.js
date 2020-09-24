import React, { Component } from 'react';
import Context from '../Context';
import { Link } from 'react-router-dom';
import './Products.css';

class ProductsPage extends Component {
  static contextType = Context;
  state = {
    products: []
  };
  
  componentDidMount() {
    fetch("https://whispering-fjord-48498.herokuapp.com/api/products")
      .then(res => res.json())
      .then(data => this.setState({
        products: data,

      }));
  };

  render() {
    return (
      <main>
        <section >
        {this.context.user ? (<>
          <button onClick={e => this.context.setUser(null)}>Logout</button>
        </>) : (<>
          <Link className="button__account" to='/accountsignin'>Sign In</Link>
          <Link className="button__account" to='/accountsignup'>Sign Up</Link>
        </>)}
          {this.state.products.map(product => (<li className="products_list">
            <a className="products" target= "_blank"  rel="noopener noreferrer" href={product.link}>{product.title}</a>
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
          </li>))}
        </section>
      </main>
    );
  }

};

export default ProductsPage;