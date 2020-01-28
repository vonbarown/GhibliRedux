import React from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import { Home } from './Components/Home'
import { Films } from './Components/Films'
import Counter from './Components/Counter'
function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link> {''}
        <Link to='/films'>Films</Link>
      </nav>
      <Switch>
        <Route path='/counter' component={Counter} />
        <Route path='/films' component={Films} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
