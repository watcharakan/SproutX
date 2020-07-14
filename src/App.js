import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './UI/Home';
import Menu from './UI/Menu';
import Header from "./components/Header";
function App() {
  return (
      <div>
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
          </div>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
