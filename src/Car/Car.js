import React from 'react';
import './Car.css';


const myCar = (props) => {
       return (
               <div className="Car">
                         <p> This is car component ! </p>
                         <ul>
                             <li>{props.name}</li>
                             <li>{props.grade}</li>
                         </ul>
               </div>
       );
}

export default myCar;