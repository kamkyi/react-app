import React from 'react';
import './Person.css';


const Person = (props) => {
    return(
        <div className="Person" onClick={props.click}>
               <ul>
                    <li>Name: {props.name}</li>
                    <li>Age : {props.age}</li>
               </ul>
               <input type="text" onKeyDown={props.down}></input>
        </div>
   );
}

export default Person;