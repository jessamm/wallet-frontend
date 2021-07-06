import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authentication from './screens/Authentication'; 
import CreateUser from './screens/CreateUser';
import LandingPage from './screens/LandingPage';
import Login from './screens/Login';
import Informacion from './screens/Informacion'



const App = () => {
  return (
    <Router>
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/create-user' component={CreateUser}></Route>
      <Route exact path='/authentication' component={Authentication}></Route>
      <Route exact path='/informacion' component={Informacion}></Route>
    </Router>
  )
}

export default App
