import React, { Component } from 'react'

class Search extends Component {

    searchRef = React.createRef();

    //Take value from Input and send from AppComponent
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
          <form onSubmit={this.handlerData}>
              <div className="row">
                  <div className="form-group col-md-9">
                      <input ref={this.searchRef} type="text" className="form-control form-control-lg"
                       placeholder="Search your image. Example: Tennis" />                      
                  </div>
                  <div className="form-group col-md-3">
                  <input type="submit" className="btn btn-lg btn-danger btn-block"
                  value="Search" />
                  </div>
                  
              </div>
          </form>
                
        );
    }
}

export default Search;