import React from 'react';
import {bootstrap as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import Home from './users'
import UsersList from "./components/user-list.component"
import CarUser from "./components/car-user-list.component"
import SignUp from "./components/user-list.component"
import Login from "./components/user-list.component"
import DeleteUser from "./components/user-list.component"
import LogoutUser from "./components/user-list.component"


function App() {
  return (
    <Router>
    <Navbar/>
    <br/>
    <Route path='/' exact component={Home} />
    <Route path="/sign_up" component={SignUp}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/get/:_id" exact component={UsersList}/>
    <Route path="/get/:favourite_car" exact component={CarUser}/>
    <Route path="/delete" exact component={DeleteUser}/>
    <Route path="/logout/:_id" exact component={LogoutUser}/>
    </Router>
  );
}

export default App;
