import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Results from './Results'
import axios from 'axios';
const constants = require('../../Constants');

class Board extends Component {

    state = {
        term: '',
        user_id: '',
        displayName: '',
        lstImage: []
    }

    componentDidMount() {
        //Validate access to dashboard
        this.validateLogin();
        this.loadImage();
    }

    loadImage = (nameFilter = '') => {
        var urlParams = new URLSearchParams(window.location.search);
        var _id = urlParams.get('userid');
        const urlLoadImg = nameFilter == '' ? `${constants.Api}/Photo?userid=${_id}` : `${constants.Api}/Photo/GetFilters?userid=${_id}&name=${nameFilter}`;

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


        axios.post(`${constants.Api}/User/getUser`, { userid: _id, })
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



    filterSearch = term => this.setState({ term: term, page: 1 }, _ => { this.loadImage(term); });


    render() {
        return (
            <React.Fragment>
                <Link to='/'>
                    <button type="button" class="btn btn-info">Logout</button>
                </Link>
                <a>  Welcome: {this.state.displayName}</a>

                <NavBar message={this.filterSearch} ></NavBar>
                <Results data={this.state.lstImage}></Results>
            </React.Fragment>
        )
    }

}
export default Board;