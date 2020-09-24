import React, { Component } from 'react';
import Context from '../Context';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service'



class PostProduct extends Component {
  static contextType = Context

  postProduct = (e) => {
  e.preventDefault();
  const {title, price, description,link} = e.target;
  const product = {
    title: title.value,
    price: price.value,
    description: description.value,
    link: link.value,
  };
  
  fetch("https://whispering-fjord-48498.herokuapp.com/api/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(product)
    })
      .then(res => {
        this.context.setProducts(product);
        this.props.history.push ('/');
      });
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
        <header className="banner">
          <h3>Did you find the deal of the day? Help everyone save!</h3>
        </header>
        <section>
          <form className='signup-form' onSubmit={this.postProduct}>
            <div>
              <label for='title'>Product</label><br></br>
              <input placeholder='Product' type="text" name='title' id='title' required />
            </div>
            <div>
              <label for='price'>Price</label><br></br>
              <input placeholder='Price' type="text" name='price' id='price' required />
            </div>
            <div>
              <label for='description'>Description</label><br></br>
              <textarea name='description' rows="15" cols="60" required></textarea>
            </div>
            <div>
              <label for='link'>Link</label><br></br>
              <input placeholder='Link to product' type="text" name='link' id='link' required />
            </div>
            <button type='submit'>Post</button>
          </form>
        </section>
      </main>
    );
  }
};

export default PostProduct;