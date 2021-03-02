import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import PageNotFound from './components/pages/404.js'
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          {/* <Route path='/sign-up' component={SignUp} /> */}
          <Route path="" component={ PageNotFound }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
