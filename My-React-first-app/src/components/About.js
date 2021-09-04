import React, { Fragment } from 'react';

const about={
   color:'white',
   marginTop:'2%'
   
}

const h={
  textAlign:'center'
}
const img={
  height:'100%',
  width:'90%'
}

const left={
   width:'40%',
   float:'left'
}
const right={
  width:'60%',
  float:'right',
  marginTop:'2%'
}


function About() {

 
    return (
      
      <>
          <div style={about}>

             <h1 style={h}>About Me</h1>
             <hr/><br></br>
             <div style={left}>
             <img style={img} src="2.png" alt="img"></img>
             </div>
             <div style={right}>
               <h1>Shofi Ahmed Rocky</h1>
               <h2>web Developer(front end)</h2><br></br>
               <p>I am an Engineer. I have read B.Sc in CSE at Leading University, Sylhet. Now I am working as a Web developer (Front End). I have 1 year of experience as a front end web developer</p>
              <br></br>
              <h1>Skills</h1><hr></hr><br></br>
              <h2>->HtML,CSS,Javascript,React</h2>
              <h2>->CMS(Wordpress)</h2>
              <h2>->Version Control System (Git)</h2><br></br>

              <h1>Experience</h1><hr></hr><br></br>
              <h2>->1 year of experience as Web developer(Front End)</h2>
             </div>

          </div>
        
      </>
    
      
    );
  }
export default About;