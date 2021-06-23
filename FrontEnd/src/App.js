import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/global.css'
import CreateUser from './screens/CreateUser';
import Login from './screens/Login';


const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/create-user' component={CreateUser}></Route>
    </Router>
  )
}

export default App
