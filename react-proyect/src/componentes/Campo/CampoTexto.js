import "./Campo.css"
import {useState} from "react"

const Campo = (props) => {  
    
    //destructuracion
    const { type = "text"} = props
    console.log(type)

    const [valor,actualizarValor] = useState("")
    
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e)=>{
        props.actualizarValor(e.target.value); 
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input  placeholder={placeholderModificado} required onChange={manejarCambio} type={type}/>
    </div>

}

export default Campo
