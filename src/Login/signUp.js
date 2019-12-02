import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
import SweetAlert from 'sweetalert2-react';

class Signup extends Component {

    usernameRef = React.createRef();
    passwordRef = React.createRef();
    displayRef = React.createRef();

    constructor(){
        super();

        this.state = {
            mensaje:'',
            show: false
        }
    };


    Register=(e)=>{   
        e.preventDefault();
        var self = this;
        let user = this.usernameRef.current.value;
        let pass = this.passwordRef.current.value;
        let display = this.displayRef.current.value;


        axios.post(`http://127.0.0.1:8000/User/singUp`,{username:user, password:pass,displayname:display})
        .then(response =>{            
            self.setState({ show: true, message:response.data.Data[0]});            
         }).catch(function (err){        
            self.setState({ show: true,message: err.response.data.Data[0]});
         });         
         
    };

  render() {   
    return (      
        <div className="wrapper">
            <div className="form-wrapper2">
            <h1>Sign Up</h1>
            <form onSubmit={this.Register}>  
                <div className="User mt-3">
                    <label>Display Name</label>
                    <input  type="text" ref={this.displayRef} placeholder="First Name" name='email'/>                     
                </div>                
                <div className="User">
                    <label>User</label>
                    <input placeholder="User" ref={this.usernameRef}  />            
                </div>
                <div className="password">
                    <label>Password</label>
                    <input placeholder="Password" type="password" ref={this.passwordRef} />             
                </div>
                <div className="createAccount">
                    <button onClick={this.Register}>Create Account</button>
                    <small>Already Have an Account?</small>
                </div>
                {/* <p><strong>Error: {this.errorMessage}</strong></p> */}

                <SweetAlert
                    show={this.state.show}
                    title="Register"
                    icon ="error"                    
                    text={this.state.message}
                    onConfirm={() => this.setState({ show: false })}                  
                />
                

            </form>  
            
            </div>       
        </div>           
    );
  }
}

export default Signup;