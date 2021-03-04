import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import PageNotFound from './components/pages/404';
import Started from './components/pages/started';
import About from './components/pages/about';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Home }/>
          <Route path='/projects' component={ Projects }/>
          <Route path="/started/" component={ Started }/>
          <Route path="/about/" component={ About }/>
          <Route path="" component={ PageNotFound }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
