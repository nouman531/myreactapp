import React from 'react';
import Afraad from './afraad/Afraad';

const persons=(props)=>
    props.insaan.map((per, index) => {

        return <Afraad click={props.Clicked.bind(this, index)}
          name={per.name} age={per.age} key={per.id} />
      });

      export default persons;