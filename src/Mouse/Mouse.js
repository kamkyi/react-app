import React,{ useState } from 'react';
import './Mouse.css';

const Mouse = (props) => {
      
     const [mouse,setMouse] = useState({
           mouse:[
               {name:'mouse one'},
               {name:'mouse two'},
               {name:'mouse three'}
           ]
     });

     const mouseClickEvent = (event) =>{
             setMouse({
                   mouse:[
                       {name:event.target.value},
                       {name:'mouse two'},
                       {name:'mouse three'}
                   ]
             });
     }
    
      return (
            <div className="mouse">
                  <h1>Hello I'm mouse !</h1>
                  <ul>
                       <li>My name is</li>
                       <li>{mouse.mouse[0].name}</li>
                       <li>{mouse.mouse[1].name}</li>
                       <li>{mouse.mouse[2].name}</li>
                  </ul>
                  <input type="text" onKeyDown={props.la}/>
            </div>
      );
}

export default Mouse;