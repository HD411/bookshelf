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

function App() {
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>;
}

export default App;
