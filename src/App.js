import React from 'react';
import './App.css';
import Routes from './Routes';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render(){
    return(     
      <div>
        <Routes></Routes>         
      </div>
    )
  }
}
export default App;

