import React,{ Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';


class App extends Component{
    state = {
         persons:[
             {name:'Wai',age:'22',id:'123'},
             {name:'Sai',age:'11',id:'234'},
             {name:'Kam',age:'10',id:'344'}
         ]
        }

    clickHandler = (personIndex) => {
           const persons = this.state.persons;

           persons.splice(personIndex,1);

           this.setState({persons:persons});
    }
    render(){
    
      return (
        <div className="App">
            <p style={classes.blue}>
                 I' m Wai Hyn Htun
            </p>
            {
                this.state.persons.map((person,index)=>{
                     return <Person name={person.name} age={person.age} key={person.id} click={this.clickHandler.bind(this,index)}/>;
                })
            }
        </div>
      );
    }
}

export default App;
