import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Welcome from './components/Welcome/welcome';
import Login from './components/Login/login';
import Signup from './components/Login/signUp';
import board from './components/Dashboard/Board'

/*import Signup from './Login/signUp';
import Login2 from './Login/Login';
import Dashboard from './Pages/Dashboard';*/


const Routes = () =>{
    return (
        <BrowserRouter>  
            <Route exact path="/" component={Welcome}/> 
            <Route  path='/Login' component={Login}/>
            <Route  path='/Signup' component={Signup}/>
            <Route path="/board" component={board}/>  
        </BrowserRouter>
    )    
}

export default Routes;