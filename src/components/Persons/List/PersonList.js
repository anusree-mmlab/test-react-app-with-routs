import React from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Person from '../Person/Person';
import classes from './PersonList.css';


const PersonList = (props) => {
    const personList = props.person.map((person, index) => {
        if(person.name === 'Sachin')  {
          return <ErrorBoundary  key={person.id + '-' +index}> <Person
                    name={person.name} 
                    age = {person.age} 
                    onClick = {props.personDeleteClick.bind(this, person.id)}
                  >
                    <p><span className={classes.hobbyLabel}>Hobbies Are:</span> 
                    <span className={classes.hobby}>Football, Travelling</span></p>
                </Person></ErrorBoundary>
        } else {
          return  <ErrorBoundary  key={person.id + '-' +index}><Person 
                    name={person.name} 
                    age = {person.age} 
                    onClick = {props.personDeleteClick.bind(this, person.id)}
                /> </ErrorBoundary>
        }
      });

    return personList;
}

export default PersonList;