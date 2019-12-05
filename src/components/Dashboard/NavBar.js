import React, { Component } from 'react';
import constants from '../../Constants';
import axios from 'axios';
var swal = require('sweetalert');

class dashboard extends Component {
    
  searchRef = React.createRef();
  fileRef = React.createRef();

    //Take value from Input and send from AppComponent

    LoadImage= e =>{
      e.preventDefault();

      var urlParams = new URLSearchParams(window.location.search);
      var _id = urlParams.get('userid');

      let formData = new FormData();
      if(this.fileRef.current.files.length>0){
        let files = this.fileRef.current.files;

        for(let i in files) {
          formData.append('filename', files[i]);
        };

        axios.post(`${constants.Api}/Photo?userid=${_id}`,formData,{
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => { swal("files uploaded successfully"); });

        this.props.message('');
      }else{
        swal("you must upload an image", "Error Upload", "error");
      }
      
     }

     
    handlerData= e =>{
       e.preventDefault();
       
       if(this.searchRef.current.value){
        this.props.message(this.searchRef.current.value);
       }else{
        this.props.message('');
       }
      }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Gallery Photos</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>        
            <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
              <form className="form-inline my-2 my-lg-0 float-right"  onSubmit={this.handlerData}>
                <input ref={this.searchRef} className="form-control mr-sm-2" type="search" placeholder="Search image" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
            <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
              <form className="form-inline my-2 my-lg-0 float-right" enctype="multipart/form-data"
              onSubmit={this.LoadImage} method="post" action={constants.Api+"/Photo?userid=5de363ed450dc32fbc6f7a14"} enctype="multipart/form-data" >
                <a className="color:red">Select two or more images...</a>
                <input type="file" multiple="multiple" name="filename" ref={this.fileRef}/>                
                <button className="btn btn-info" placeholder="ss" type="submit">Upload</button>                
              </form>            
            </div>
        </nav>

      </React.Fragment>
    )}
}

export default dashboard;

