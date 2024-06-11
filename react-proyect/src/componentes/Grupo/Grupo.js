import "./Grupo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';


const Grupo = (props) => {
  const { colorPrimario, colorSecundario, titulo,id } = props.datos;
  const { colaboradores,eliminarColaborador,actualizarColor,like} = props;

  const obj = {
    backgroundColor:hexToRgba(colorPrimario,0.6)
  };

  const estilotitulo = {
    borderColor: colorPrimario,
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
        <input type="color"
        value={colorPrimario}
        onChange={(evento)=>{
            actualizarColor(evento.target.value,id)
        }}
        />
          <h3 style={estilotitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador datos={colaborador} key={index} 
              colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador}
              like={like}/>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Grupo;
