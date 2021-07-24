import React from 'react';
import './App.css'


import Home from './pages/Home';
import Room from './pages/Room';
import Singlroom from './pages/Singlroom';

import Error from './pages/Error';

import { Route,Switch } from 'react-router-dom';


import Navbar from './Components/Navbar';

function App() {
  return (
   <>
   <Navbar />
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route  exact path="/Room/" component={Room }/>
   <Route  exact path="/room/:slug" component={Singlroom }/>
   <Route   component={Error }/>


   </Switch>
  

   </>



    
  );
}

export default App;
