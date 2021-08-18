import React from 'react'
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/contact" component={Contact} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
