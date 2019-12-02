import React,{Component} from 'react';
import Signup from './Login/signUp';
import Login2 from './Login/Login';
import {BrowserRouter, Route} from 'react-router-dom'
import Welcome from './welcome/welcome';
import Dashboard from './Pages/Dashboard';


const Routes = () =>{
    return (
        <BrowserRouter>  
                <Route exact path="/" component={Welcome}/>
                <Route  path='/Login' component={Login2}/>
                <Route  path='/Signup' component={Signup}/>
                <Route path="/dashboard" component={Dashboard}/>                                
        </BrowserRouter>  
    )    
}

export default Routes;