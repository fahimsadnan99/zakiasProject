import React from 'react'
import Login from './pages/Login';
import Navbar from './pages/Navbar'
import { Switch, Route } from "react-router-dom"
import Deshbord from './pages/Deshbord';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route path={"/login"} exact component={Login}></Route>
        <Route path={"/deshbord"} exact component={Deshbord}></Route>
      </Switch>
    </>
  );
}

export default App