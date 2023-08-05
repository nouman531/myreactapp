import React, { Component } from 'react';

import './App.css';
import Afraad from './components/Persons01/afraad'


class App extends Component {

  ////////State//////////////////////////
  state = {
    insaan: [
      { id: 'qwde', name: "Noman", age: "21" },
      { id: 'asfa', name: "Aasher", age: "20" },
      { id: 'adsf', name: "Faizan", age: "22" }
    ],
    showPersons: false
  };
  ///////////////////////////////////////////

  //////////////Showing Persons//////////////
  showNameHandler = () => {
    const DoesShow = this.state.showPersons;
    this.setState({ showPersons: !DoesShow })
  }
  ///////////////////////////////////////////

  ///////////////Deleteing Persons///////////
  deleteNameHandler = (InsanIndex) => {
    const deleteInsan = [...this.state.insaan];
    deleteInsan.splice(InsanIndex, 1);
    this.setState({ insaan: deleteInsan });
  }
  //////////////////////////////////////////

  ////////////Rendering// Returning////////////////////////////////////
  render() {
    //////CSS Part/////
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor: 'pointer'
      
    };


    ///////////////////

    ///Functoinality that show as well as 
    //delete the person ///
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.insaan.map((per, index) => {

            return <Afraad click={this.deleteNameHandler.bind(this, index)}
              name={per.name} age={per.age} key={per.id} />
          })}

        </div>
      );
      style.backgroundColor='blue'
     
    }
     //////////////

    ///Condition///
    let CSSclasses=[];
    if(this.state.insaan.length<=2)
    {
      CSSclasses.push('blue');
    }
    if(this.state.insaan.length<=1){
      CSSclasses.push('bold');
    }

    ///////////
    return (

    
      <div className='App'>
        <p className={CSSclasses.join(' ')}>I am Just Learnig Allah will Help Me.</p>
      
        <button 
          style={style}
        onClick={this.showNameHandler}>Show Names</button>
        {persons}

      </div>
      
    );
  }
//////////////////////////////////////////////////////////////////////////////
}

export default App;