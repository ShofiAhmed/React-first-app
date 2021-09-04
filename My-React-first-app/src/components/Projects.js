
import React from 'react';
import { NavLink } from 'react-router-dom';

const project = {
  color:'white',
  textAlign: 'center',
  marginTop:'2%'
};

function Projects() {
    return (
      <>
       <div style={project}>
        <h1>Here is my all projects</h1>
        <h1>Click below menus to see my projects</h1><br></br><br></br>

        <div className="menu">

         <NavLink className="link" to="/greetings">Greetings</NavLink>
         <NavLink className="link" to="/form">Form project</NavLink>

        </div>
        

       </div>
       
      </>
         
    );
  }
export default Projects;