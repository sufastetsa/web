import React from 'react';
/*import { Button } from 'semantic-ui-react';*/
import Register from './Register';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './Home';
import './App.css';

function App() {
 return (
  <Router>
     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route path='/Register'>
         <Register/>
       </Route>
     </Switch>
   </Router>
   
 );
}

export default App;
