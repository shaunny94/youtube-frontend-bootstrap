import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Col, Row} from 'react-bootstrap';
import CenteredGrid from './components/CenteredGrid';
import axios from 'axios';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {url: ""} ;
    
  }

  render() {
    return (
     <CenteredGrid keywords={this.state} />
     
    );
  }
}

export default App;
