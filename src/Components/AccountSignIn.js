import React, { Component } from 'react';
import Context from '../Context';
import './Account.css'

class AccountSignIn extends Component {
  static contextType = Context

  login = (e) => {
    e.preventDefault()
    const {username,password} = e.target
    const user = {
      username: username.value,
      password: password.value,
    }
    fetch("https://whispering-fjord-48498.herokuapp.com/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then( res => res.json())
      .then(res => {
        localStorage.authToken = res.authToken
        this.context.setUser(user)
        this.props.history.push('/')
      })
  }
  
  render() {
    return (
      <main>

        <header className="banner" role="banner">
          <h3>Sign in to help find the best deals for people like you, searching for the best deals!</h3>
        </header>

        <section>
          <form className='signup-form' onSubmit={this.login}>
            <div>
              <label for="username">Email</label><br></br>
              <input type="email" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label><br></br>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign In</button>
          </form>
        </section>


      </main>
    );
  }
}

export default AccountSignIn;