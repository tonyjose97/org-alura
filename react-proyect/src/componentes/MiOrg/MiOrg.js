import React, { useState } from 'react';
import "./MiOrg.css"

//poder cambiar el estado de "X" elemntos
//useState()
// const [nombredelavariable,funcionactualizar] = useState(valorinicial)

const MiOrg = (props) =>{

       //  const [mostrar,actualizarMostrar] = useState(true)
      //   const manejarClick =()=>{
     //   console.log("Moatrar / Ocultar" ,!mostrar);
    //  actualizarMostrar(!mostrar)
   // }

    return <section className="miorg">
        <h3 className="titulo">Mi Organizacion</h3>
        <img src="./img/boton.png"  onClick={props.cambiarMostrar}/>

    </section>
}

export default MiOrg