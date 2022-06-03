import React from 'react';
import '../hojas-de-estilos/Tarea.css'
import { RiCloseCircleLine } from "react-icons/ri";

function Tarea({ texto, completada }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'>
        <RiCloseCircleLine className='tarea-icono'/>
      </div>
    </div>
  );
}

export default Tarea;
