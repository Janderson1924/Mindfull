import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from "./components/home";

const Parser = require('rss-parser');
const parser = new Parser();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // message: 'Click the button to load data!'
      feed: []
    }
  }

async componentDidMount() {
  const feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://www.goodnewsnetwork.org/category/news/inspiring/feed/');
  this.setState({ feed });

  feed.items.slice(-5).forEach(item => {
    console.log(`${item.title}: ${item.link}`);
  });
}  

fetchData = () => {
  axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  .then((response) => {
    // handle success
    console.log(response.data) // The entire response from the Rails API

    console.log(response.data.message) // Just the message
    this.setState({
      message: response.data.message
    });
  }) 
}

  render() {
    return (
      <Router>
        <Switch>
          <Home />
        </Switch>
      </Router>
    )
  }
}

export default App;
