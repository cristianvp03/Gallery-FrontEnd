import React, { Component } from "react";
import './info.css';

class News extends Component {
 
  render() {
    return (      
        <div className="wrapper">
            <div className="form-wrapper">
            <h1>Upload, search, view and delete your photos!</h1>  
                  <h4 className="mt-4">You just have to write any word and find all the related photos.</h4>                
                  <h4 className="mt-4">you can create album with your holiday photos</h4> 
                  <h4 className="mt-4">delete the photos that you no longer like</h4> 
                  <h4 className="mt-4">and the best! Create gallery</h4> 
            </div>       
        </div>           
    );
  }
}

export default News;