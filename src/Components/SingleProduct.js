import React, { Component } from 'react';
import Context from '../Context';
import Button from './Button';



class SingleProduct extends Component {
  static contextType = Context;
  state = {
    product: [],
    counter: 0,
  };
  incrementcounter = (e) => {
    e.preventDefault();
    this.setState(
      { counter: this.state.counter + 1 }
    )
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

        <section>
          {this.state.product.map(product => (<li>
            {product.title}
            {product.price}
            {product.description}
            {product.link}
          </li>))}
          {this.state.counter}
          <Button onClick={this.incrementCounter} />
        </section>

      </main>
    );
  }
};

export default SingleProduct;