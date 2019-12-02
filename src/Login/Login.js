import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import SweetAlert from 'sweetalert2-react';

class Login2 extends Component {

  usernameRef = React.createRef();
  passwordRef = React.createRef();

  constructor() {
    super();   

    this.state = {
      mensaje: '',
      show: false,
      autentication: false
    }
  };

  UserValidate = (e) => {
    e.preventDefault();
    var self = this;
    let user = this.usernameRef.current.value;
    let pass = this.passwordRef.current.value;

    axios.post(`http://127.0.0.1:8000/User/logIn`, { username: user, password: pass })
      .then(response => {
        window.location.href = `/dashboard?userid=${response.data.Data[0].id}` ;
      }).catch(function (err) {
        self.setState({ show: true, message: err.response });
      });
  };


  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper2">
          <h1>lOGIN</h1>
          <form onSubmit={this.UserValidate}>
            <div className="User">
              <label>User</label>
              <input placeholder="User" ref={this.usernameRef} />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input placeholder="Password" type="password" ref={this.passwordRef} />
            </div>
            <div className="createAccount">
              <Link to='/Dashboard' className="createAccount">
                <button onClick={this.UserValidate}>Login</button>
              </Link>
            </div>
            <small className="createAccount">Already Have an Account?</small>
            <SweetAlert
              show={this.state.show}
              title="Register"
              icon="error"
              text={this.state.message}
              onConfirm={() => this.setState({ show: false })}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login2;