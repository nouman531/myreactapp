import React from 'react';
import classes from './Cockpit.css';
const cockPit=(props)=>{

    let CSSclasses=[];
    if(props.insaan.length<=2)
    {
      CSSclasses.push(classes.red);
    }
    if(props.insaan.length<=1){
      CSSclasses.push(classes.bold);
    }
    return(
        <div className={classes.Cockpit}>
            <p className={CSSclasses.join(' ')}>I am Just Learnig Allah will Help Me.</p>
      
      <button 
      
      onClick={props.Clicked}> Show Names</button>
        </div>
    );

};

export default cockPit; 