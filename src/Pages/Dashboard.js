import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ListImages from './ListImages';
import CreateImages from './CreateImages';
import FileUpload from './FileUpload';

import Layout from '../Layout';
import { BrowserRouter, Route } from 'react-router-dom'


class Dashboard extends Component {

    

    
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route path="/ListImages" component={ListImages} />
                    <Route path="/CreateImages" component={CreateImages} />
                    <Route path="/FileUpload" component={FileUpload} />
                </Layout>
            </BrowserRouter>
        )
    }

}
export default Dashboard;

