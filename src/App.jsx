import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/Home';
import add from './pages/add';

function App() {
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/add" component={add} />
  </Switch>;
}

export default App;
