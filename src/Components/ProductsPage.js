import React, { Component } from 'react';
import Context from '../Context';
import { Link } from 'react-router-dom';
import './Products.css'

class ProductPage extends Component {
  static contextType = Context
  state = {
    products: []
  };
  
  componentDidMount() {
    fetch("https://whispering-fjord-48498.herokuapp.com/api/products")
      .then(res => res.json())
      .then(data => this.setState({
        products: data,

      }))
  };

  render() {
    return (
      <main>
        <section >
          {this.state.products.map(product => (<li className="products_list">
            {/* <Link className="products" to={"/product/" + product.id}>{product.title}</Link> */}
            <a className="products" target= "_blank" href={"https://www." + product.link}>{product.title}</a>
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
          </li>))}
        </section>
      </main>
    );
  }

}

export default ProductPage;