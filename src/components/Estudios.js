import React from 'react';
import useTitle from './useTitle';

const Estudios = () => {

  const textContainer = {
    fontSize: "20px",
    justifyContent: "justify"
  }

  const container = {
    display: "flex",
    justifyContent: "center",
    wrap: "wrap",
    margin: "50px", 
    padding: "10px"

  }

  useTitle({title : "Estudios"})

  return (
    <div style={container}>
    <div style={textContainer}>
      <ul><h2 className='title' style={{textAlign:"left"}}>Estudios</h2></ul>
      <ul>Reserva turno a traves de WhatsApp o llamando al Telefono y consulta por cualquier estudio oftalmológico. 
        Mantener una salud ocular es de vital importancia, y la prevención y el cuidado son uno de los pilares para evitar el desgastamiento de la visión.</ul>
      <div className={"divContainer"}>
      <ul>REFRACCIÓN COMPUTARIZADA</ul> 
      <p>Utiliza un refractómetro automático para proporcionar una medición objetiva del error de refracción y la prescripción de una persona para gafas o lentes de contacto.</p>
      </div>
      <div className={"divContainer"}>
      <ul>TOPOGRAFÍA CORNEAL</ul>
      <p>La topografía o tomografía corneal es una prueba diagnóstica no invasiva que consiste en un estudio de la geometría de la córnea, 
        con el objetivo de analizar las irregularidades que puede haber en el relieve y la curvatura de su superficie.</p>
      </div>
      <div className={"divContainer"}>
      <ul>PAQUIMETRÍA </ul>
      <p>La paquimetría es una prueba oftalmológica que sirve para medir el espesor de la córnea, la membrana transparente situada en la parte delantera del ojo.</p>
      </div>
      <div className={"divContainer"}>
      <ul>TONOMETRÍA (PRESIÓN INTRAOCULAR)</ul>
      <p>Es un examen para medir la presión dentro de los ojos. Este examen se utiliza para buscar glaucoma. 
        También se utiliza para medir qué tan bien está funcionando el tratamiento para el glaucoma.</p>
      </div>
      <div className={"divContainer"}>
      <ul>CAMPIMETRÍA COMPUTARIZADA</ul>
      <p>La campimetría es una de las pruebas diagnósticas más importantes en oftalmología. Sirve para detectar problemas o alteraciones en el campo visual del paciente.</p>
      </div>
      <div className={"divContainer"}>
      <ul>TOMOGRAFÍA DE COHERENCIA ÓPTICA (OCT)</ul>
      <p>La tomografía de coherencia óptica (OCT) es un estudio de imágenes no invasivo. La OCT utiliza ondas de luz para obtener imágenes en corte transversal de la retina.</p>  
      </div><div className={"divContainer"}>
      <ul>IOL MASTER</ul>
      <p>La biometría ocular IOL Master es una prueba que mide el tamaño del globo ocular, llamada longitud axial, y permite calcular la potencia 
        dióptrica de las lentes intraoculares que se implantan al extraer el cristalino, que es la lente interior del ojo que ayuda a enfocar mejor.</p>
      </div><div className={"divContainer"}>
      <ul>GONIOSCOPIA</ul>
      <p>La gonioscopia es un examen de la vista para observar la parte frontal del ojo (cámara anterior) entre la córnea y el iris . 
        La gonioscopia es un examen indoloro para ver si la zona de donde sale el líquido del ojo (llamada ángulo de drenaje ) se encuentra abierta o cerrada.</p>
      </div><div className={"divContainer"}>
      <ul>ECOGRAFÍA</ul>
      <p>La ecografía oftálmica u ocular, también llamada ultrasonografía o ultrasonido ocular consiste en una técnica de examen y diagnóstico de imagen 
        que analiza las estructuras del globo ocular y las anexas a este. Nos permite ver el interior del ojo incluso si existe opacidad que impida su correcta visualización.</p>
      </div><div className={"divContainer"}>
      <ul>FOTOCOAGULACIÓN YAG LASER</ul>
      <p>La fotocoagulación es una técnica utilizada en oftalmología, con la que se genera una cicatriz en la retina mediante quemadura terapéutica, 
        para lo cual se aplica un haz de luz (láser) sobre la misma. La cicatriz resultante permite detener el desarrollo de ciertas enfermedades retinianas.</p>
      </div><div className={"divContainer"}>
      <ul>FACOEMULSIFICACIÓN (CIRUGÍA DE CATARATAS)</ul>
      <p>Con este procedimiento, su médico usa un instrumento que produce ondas sonoras para romper la catarata en pequeños fragmentos. Luego estos se
         extraen por medio de succión. Este procedimiento utiliza una incisión muy pequeña.</p>
      </div><div className={"divContainer"}>
      <ul>IRIDOTOMÍA LÁSER</ul>
      <p>La iridotomía con láser es un procedimiento para tratar ángulos estrechos, glaucoma crónico de ángulo cerrado y glaucoma agudo de ángulo cerrado. 
        El impacto de un ataque de glaucoma agudo de ángulo cerrado es interno profundo e irreversible, y la condición debe tratarse de inmediato.</p>
      </div><div className={"divContainer"}>
      <ul>TRATAMIENTO DE OJO SECO</ul>
      <p>Para la mayoría de las personas que presentan síntomas ocasionales o leves de sequedad ocular, basta con usar con regularidad gotas para los ojos 
        sin receta médica (lágrimas artificiales). Si los síntomas son persistentes o más graves, puedes recurrir a otras opciones.</p>
      </div><div className={"divContainer"}>
      <ul>TRATAMIENTO DE DESPRENDIMIENTO DE RETINA</ul>
      <p>El tratamiento del desprendimiento de retina es quirúrgico y el principal objetivo de la cirugía es sellar todos los desgarros o agujeros retinianos y
         reaplicar la retina. Esto se hace fundamentalmente con 3 métodos: vitrectomia, cirugía escleral o retinopexia neumática.</p>
      </div><div className={"divContainer"}>
      <ul>INYECCIÓN INTRAVÍTREAS</ul>
      <p>Las inyecciones intravítreas consisten en la administración de medicamentos en el ojo para tratar enfermedades oculares y proteger la visión.
         Mediante una inyección, el medicamento adecuado se introduce en la cavidad vítrea, un espacio situado en la parte posterior del ojo, detrás del cristalino.</p>
      </div><div className={"divContainer"}>
      <ul>LÁSER EXCIMER</ul>
      <p>El láser Excímer o láser de excímeros es un tipo de láser con diferentes longitudes de onda que genera una luz ultravioleta, invisible y 
        fría que, en vez de cortar o quemar, crea suficiente energía como para separar las moléculas de los tejidos.</p>
      </div><div className={"divContainer"}>
      <ul>TEST ISHIHARA</ul>
      <p>Mediante estas cartas se realiza un test visual que nos permitirá detectar si somos daltónicos. La prueba consiste en una serie de cartas de 
        colores en las que veremos círculos de puntos de colores y tamaños aleatorios. </p>
      </div>
      <div className={"divContainer"}>
      <ul>TEST AMSLER</ul>
      <p>El test de la rejilla de Amsler es una forma rápida y fácil de evaluar la visión central de la retina (visión de la mácula).
         La mácula se caracteriza por tener la mayor concentración de conos de la retina. Éstos fotorreceptores son los responsables de la definición o resolución visual.</p>
      </div>
      <div className={"divContainer"}>
      <ul>TEST SCHIRMER</ul>
      <p>Es una prueba que determina si el ojo produce suficientes lágrimas para mantenerlo húmedo.Antes del examen, le aplicarán gotas oftálmicas 
        anestésicas con el fin de evitar el lagrimeo de los ojos, debido a la irritación causada por las tiras de papel.</p>
      </div>

    </div>
    </div>

    
  );


}

export default Estudios;
