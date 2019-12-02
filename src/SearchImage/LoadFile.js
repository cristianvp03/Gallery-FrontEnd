import React, { Component } from 'react'

class Search extends Component {

    searchRef = React.createRef();

    //Take value from Input and send from AppComponent
    handlerData = e => {
        e.preventDefault();

        if (this.searchRef.current.value) {
            this.props.message(this.searchRef.current.value);
        } else {
            this.props.message('');
        }

    }

    render() {
        return (
            <form onSubmit={this.handlerData}>
                <div className="row">
                    <div className="file-field">
                        <div className="btn btn-primary btn-sm float-left">
                            <span>Choose file</span>
                            <input type="file" name="filename" multiple="multiple"/>
                        </div>
                        <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload your file"/>
                        </div>
                    </div>

                </div>
          </form>





                    );
                }
            }
            
export default Search;