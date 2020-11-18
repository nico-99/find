import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  let name = 'Home'
  return (
    <div className="container">
      <Router>
      <NavBar name={name}/>
      <Switch>
        <Route exact path='/'>
          <Route exact path='/itemdetail/:productId'
          component={ItemDetailContainer}
          />
          <Home/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
