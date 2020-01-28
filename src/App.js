import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/counter'>Counter</Link> {''}
        <Link to='/films'>Films</Link>
      </nav>
      <Switch>
        <Route to='/counter' component={counter} />
      </Switch>
    </div>
  );
}

export default App;
