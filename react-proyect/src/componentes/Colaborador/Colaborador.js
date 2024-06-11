import "./Colaborador.css"
import { IoMdCloseCircle  } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Colaborador = (props)=>{

    
    const {puesto,nombre,foto,id,equipo,fav}= props.datos
    const{colorPrimario,eliminarColaborador,like} = props
    return <div className="colaborador">
            <IoMdCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
    
        </div>
        { fav ? <FaHeart color="red" onClick={()=> like(id)} /> :<FaRegHeart  onClick={()=> like(id)}/>}
    </div>
}

export default Colaborador