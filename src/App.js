import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import { Home } from './Components/Home'
import { Films } from './Components/Films'
function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link> {''}
        <Link to='/films'>Films</Link>
      </nav>
      <Switch>
        {// <Route to='/counter' component={counter} />
        }
        <Route to='/films' component={Films} />

        <Route to='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
