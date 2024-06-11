import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Grupo from "./componentes/Grupo/Grupo";
import Footer from "./componentes/Footer/Footer";
import { v4 as uuid } from 'uuid';

function App() {
  //operadores ternarios ? , : es como usar if(?) y else(:)
  //array.map((elemento =>{ return  <Grupo datos={equipos}  key={equipos.titulo}}))

  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores,actualizarColaboradores] =useState([
    {
      id:uuid(),
      equipo: "Front End",
      foto : "https://github.com/harlandlohora.png",
      nombre: "Harland lohora",
      puesto: "Instructor",
      fav:true

    },
    {
      id:uuid(),
      equipo: "Movil",
      foto : "https://github.com/christianpva.png",
      nombre: "Cristian Velasco",
      puesto: "Head de Alura e instructor",
      fav:false
    },
    {
      id:uuid(),
      equipo: "Devops",
      foto : "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmary Quijada",
      puesto: "Instructora en Alura Latam",
      fav:true
    }
  ])

  const [equipos,actualizarEquipos] = useState([
    { 
      id:uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id:uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id:uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id:uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id:uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ])
  

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //regustrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador",colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //eliminar colaborador
  const eliminarColaborador = (id) =>{
    console.log("eliminando colaborador", id);
    const nuevosColaborador = colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColaborador);
  }

  //actualiazar color
  const actualizarColor = (color,id)=>{
    console.log("actualizar: ",color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id=== id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  // crear equipo
  const crearEquipo= (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  // dar like
  const like = (id)=>{  
    console.log("like",id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario 
       equipos={equipos.map((equipo)=>equipo.titulo)}  registrarColaborador={registrarColaborador}  crearEquipo={crearEquipo}/> : <></> 
        
       }
      
      
      {/*mostrarFormulario && <Formulario/> */}
      <MiOrg cambiarMostrar={cambiarMostrar} />

       
      { 
      /*creacion de los equipos */
      equipos.map((equipos) => <Grupo 
      datos={equipos} 
      key={equipos.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipos.titulo)}
      eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor}
      like={like}
      /> )}

      <Footer/> 
    </div>
  );
}

export default App;
