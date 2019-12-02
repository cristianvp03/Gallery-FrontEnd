import React, { Component } from 'react';
import { Navbar as NavbarBootstrap, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Results from '../SearchImage/Results'
import Search from '../SearchImage/Search'
import LoadFile from '../SearchImage/LoadFile'

class Navbar extends Component {

    state = {
        term:'',
        user_id: '',
        displayName: '',
        lstImage: []
    }

    componentDidMount() {
        //Validate access to dashboard
        this.validateLogin();
        this.loadImage();
    }

    loadImage = (nameFilter='') => {
        var urlParams = new URLSearchParams(window.location.search);
        var _id = urlParams.get('userid');
        const urlLoadImg = nameFilter=='' ? `http://192.168.1.4:3020/Photo?userid=${_id}` : `http://192.168.1.4:3020/Photo/GetFilters?userid=${_id}&name=${nameFilter}`;

        axios.get(urlLoadImg)
            .then(response => {
                this.setState({ lstImage: response.data.Data });
            });
    }


    validateLogin = _ => {
        var urlParams = new URLSearchParams(window.location.search);
        var _id = urlParams.get('userid');

        if (_id === undefined) {
            window.location.href = "/";
        }


        axios.post(`http://192.168.1.4:3020/User/getUser`, { userid: _id, })
            .then(response => {
                this.setState({
                    user_id: response.data.Data.userId,
                    displayName: response.data.Data.displayName
                });
            })
            .catch(function (err) {
                window.location.href = "/";
            });
    }

    
    
    filterSearch = term =>this.setState({term:term,page:1},_=>{this.loadImage(term);});

    render() {
        return (

            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center"><strong>Image Search</strong></p>
                    <Search message={this.filterSearch} />
                </div>
                <div className="lead text-center"> <strong>Image Search</strong>
                    <LoadFile message={this.filterSearch} />
                </div>
                <div className="row justify-content-center">
                    <Results data={this.state.lstImage} />
                </div>
            </div>
        )
    }
}
export default Navbar;