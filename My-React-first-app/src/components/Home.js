import React, { Fragment } from 'react';
import './style.css';
import Socialmedia from './projects/Socialmedia';


function Home() {
    return (
      
      <>
      
          <div className="homepage">
             
           
               <div className="homeleft">
                 
                 <h1>Shofi Ahmed Rocky</h1><br></br>
                 <h2>Web Developer (Front End)</h2><br></br>
                 
                 < Socialmedia />

               </div>
               
               <div className="homeright">
                 <img src="2.png" alt="img"></img>
               </div>

             </div>


         
      </>
    
    );
  }
export default Home;