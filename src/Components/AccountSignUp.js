import React, { Component } from 'react';
import Context from '../Context'
import './Account.css'
import ValidationError from './ValidationError'

class AccountSignUp extends Component {
  static contextType = Context

  state = {
    password: {
      value: "",
      touched: false
    },
}

// handleSubmit = () => {
//     const { password, confirmPassword } = this.state;
//     // perform all neccassary validations
//     if (password !== confirmPassword) {
//         alert("Passwords don't match");
//     } else {
//         // make API call
//     }
// }

  register = (e) => {
    e.preventDefault()
    const { fullname, username, password } = e.target
    const user = {
      fullname: fullname.value,
      username: username.value,
      password: password.value,
    }
    fetch("https://whispering-fjord-48498.herokuapp.com/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        this.context.setUser(user)
        this.props.history.push('/')
      })
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 8 || password.length > 72) {
      return "Password must be between 6 and 72 characters long";
    } else if (!password.match(/[0-9]/)) {
      return "Password must contain one upper case, lower case, number and special character";
    }
  }

  render() {
    const passwordError = this.validatePassword();
    return (
      <main>

        <header role="banner">
          <h3 className="banner">Sign up to help find the best deals for people like you, searching for the best deals!</h3>
        </header>

        <section>
          <form className='signup-form' onSubmit={this.register}>
            <div>
              <label for="fullname">Your Name</label><br></br>
              <input type="text" name='fullname' id='fullname' />
            </div>
            <div>
              <label for="username">Email</label><br></br>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label><br></br>
              <input type="password" name='password' id='password' />
            </div>
            {this.state.password.touched && (
            <ValidationError message={passwordError} />)}
            {/* <div>
            <label for="confirmpassword">Confirm Password</label><br></br>
              <input type="password" name='password' id='password' />
            </div> */}
            <button type='submit'>Sign Up</button>
          </form>
        </section>

      </main>
    );
  }

}

export default AccountSignUp;