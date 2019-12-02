import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './welcome.css';
import News from './new1';

class Welcome extends Component {
 
  render() {

    return (    
      <div> 
          <div className="wrapper">                   
              <div className="form-wrapper">
              <h1>welcome to your gallery!</h1>  
                    <h4 className="mt-4">Relive your best moments.</h4>                
                    <h4 className="mt-4">Search, create your own gallery and others.</h4>  
                    <Link to='/Login'>
                        <div className="createAccount">
                          <button type="submit" >LogIn</button>
                        </div>
                    </Link>
                    <Link to='/Signup'>
                        <div className="createAccount">
                          <button type="submit">Create Account</button> 
                        </div>
                    </Link>
                    <small className="createAccount mt-3">relive your moments!</small>                
              </div>
          </div> 
          <div>
            <News></News>
          </div>
        </div>          
    );
  }
}

export default Welcome;