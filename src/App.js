import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/global.css'
import CreateUser from './screens/CreateUser';
import Login from './screens/Login';
import LandindPage from './screens/LandindPage';
import Authentication from './screens/Authentication';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={LandindPage}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/create-user' component={CreateUser}></Route>
      <Route exact path='/authentication' component={Authentication}></Route>
    </Router>
  )
}

export default App
