import React from "react";

const Tarjetas = (prop, k) => {
  if (prop.img.length > 1 ){

    return(
      <div className="os-style" key={k}>
        <div style={{display:'flex', justifyContent:'center'}}>
        <img width={220} src={prop.img} alt=" algo " />
        </div>
        <h3> {prop.name} </h3>
        <p> {prop.description} </p>
      </div>

    )


  } else{
    return(
      
      <div className='profesional-style' style={{width: "90%"}}>
        <h3>{prop.name} </h3>
        <p>{prop.description} </p>
      </div>

    )
  }
}
  export default Tarjetas;