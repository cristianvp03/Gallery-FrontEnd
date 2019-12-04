import React from 'react';
import './assets/css/App.css';
import Routes from './Routes';

//bootstrap
import './assets/css/bootstrap.min.css';


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

