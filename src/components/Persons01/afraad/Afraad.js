import React from 'react';
import Radium from 'radium';

const Afraad=(props)=>{
  

    return(
/////here the style will override teh class setting because of the css rukes not because of radium 
        <div className="Afraad">
            <p onClick={props.click}>My name is {props.name} and my age is {props.age}.</p>
        </div> 
    );

};

export default Afraad;