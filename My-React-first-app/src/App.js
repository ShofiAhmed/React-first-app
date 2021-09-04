import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Greetings from './components/Greetings';
import Form from './components/projects/Form';
import Projects from './components/Projects';
import Menu from './Menu';
import { Route, Switch } from 'react-router-dom';


function App() {

  return (

    <>

     <Menu />

       <Switch>
         <Route exact path='/' component={Home}/>
         <Route path='/about' component={About}/>
         <Route path='/greetings' component={Greetings}/>
         <Route path='/projects' component={Projects}/>
         <Route path='/form' component={Form}/>
         
       </Switch>
    </>
  
  );
}

export default App;
