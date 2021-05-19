import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Moods from "./components/moods";
import Resource from "./components/resource";
import Login from "./components/login";
import Register from "./components/register";
import UserProfile from "./components/user_profile";
import MeditationAnimation from "./components/meditation_animation";

const Parser = require("rss-parser");
const parser = new Parser();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
    };
  }

  componentDidMount() {
    parser
      .parseURL(
        "https://cors-anywhere.herokuapp.com/https://www.goodnewsnetwork.org/category/news/inspiring/feed/"
      )
      .then((res) => {
        this.setState({
          feed: res.items.map((item) => {
            return [item.title, item.link];
          }),
        });
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/moods">
            {this.state.feed[Math.floor(Math.random() * 10 + 1)] && (
              <Moods
                newsArticle={
                  this.state.feed[Math.floor(Math.random() * 10 + 1)]
                }
              />
            )}
          </Route>
          <Route path="/moods/:category">
            <Resource />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/meditation">
            <MeditationAnimation />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
