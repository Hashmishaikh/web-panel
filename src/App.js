import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from "./Components/Home";
import Tasks from './Components/Tasks';
import User from './Components/User';
import Login from './Components/Login';
import ChangePass from './Pages/ChangePass';

function App() {
  const currentUser = true;
  
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/">
           {currentUser ? <Home />: <Login />}
        </Route>
        <Route  path="/tasks">
            {currentUser ? <Tasks /> : <Login />}
        </Route>
        <Route  path="/user">
            {currentUser ? <User /> :<Login />}
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route>
          <ChangePass />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;