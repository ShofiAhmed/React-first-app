import React from 'react';
import { NavLink } from 'react-router-dom';


const greet = {
  
  textAlign: 'center',
  marginTop:'3%',
  color:'white'
 
};

const greetvalue={
  
  color:'green'

}
 

function Greetings()
{

    let curDate = new Date();
curDate = curDate.getHours();

let greetings = '';
if(curDate>=1 && curDate<12){
  greetings='good morning';
}
else if(curDate>=12 && curDate<17){
  greetings='good afternoon';
}
else{
  greetings='good night';
}


  return (
    <>

    <div style={greet}>
     <NavLink className="link" to="/form">Form project</NavLink><br></br><br></br>
       
     <h1>This is my dynamic greetings project</h1><br></br><br></br>
       <h1>It work based on your pc current time</h1><br></br><br></br><br></br>
     <div style={greetvalue}>
       <h1>{greetings}</h1>
   
      </div>


    </div>
     
   </>
  );
}

export default Greetings;
