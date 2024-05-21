import React from 'react';

const Estudios = () => {

  const ejem = ["asda", 12, 3+1];

  
  function generearFalopa(print){ 
    return(
      <h2>{print}</ h2>
    )
  }

  function liContainer(arr){
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].toString())

      generearFalopa(arr[i].toString());
      
    
    }   
    

  }


  return (
    <div>
      <h2 className='title'>Estudios</h2>
      <li>{liContainer(ejem)}</li>
    </div>

    
  );


}

export default Estudios;
