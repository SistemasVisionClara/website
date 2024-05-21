import React from "react"

const Tarjetas = (prop) => {




  if (prop.img.length > 1 ){

    return(
      <div className="os-style">
        <div style={{display:'flex', justifyContent:'center'}}>
        <img width={220} src={prop.img} alt=" algo " />
        </div>
        <h3> {prop.name} </h3>
        <p> {prop.description} </p>
      </div>

    )


  } else{
    console.log(prop.img)
    console.log("no esta andando")
    return(
      
      <div className='profesional-style'>
        <h3>{prop.name} </h3>
        <p>{prop.description} </p>
      </div>

    )
  }
}
  export default Tarjetas;