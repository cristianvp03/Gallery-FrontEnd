import React from "react";
import Navbar from './Pages/Navbar'

function Layout(props) {
    return (
      <React.Fragment>
       <Navbar/>
              {props.children} 
                  
      </React.Fragment>
    );
  }
  
  export default Layout;