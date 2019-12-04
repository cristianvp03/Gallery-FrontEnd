import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import './login.css';
import axios from 'axios';
import SweetAlert from 'sweetalert2-react';
import constants from '../../Constants';

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

    axios.post(`${constants.Api}/User/logIn`, { username: user, password: pass })
      .then(response => {
        window.location.href = `/Board?userid=${response.data.Data[0].id}` ;
      }).catch(function (err) {
        self.setState({ show: true, message:'Incorrect username or password'});
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
            <Link to='/Signup'>
                <small className="createAccount">Already Have an Account?</small>
            </Link>
            
            <SweetAlert
              show={this.state.show}
              title="Register"
              type= "warning"
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