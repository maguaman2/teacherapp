import React, { useState } from "react";
import { createTeacher } from '../service/TeacherService'

function TeacherCreate() {

  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      nombres: nombres,
      apellidos: apellidos,
      correo: correo,
      sexo: "Mas",
      estado_civil: "Soltero",
    }
    createTeacher(objeto)

  }

  const onChange = (event) =>{
    if(event.target.name==='nombres')
    {
    setNombres(event.target.value)
    }
    if(event.target.name==='apellidos')
    setApellidos(event.target.value)

    if(event.target.name==='correo')
    setCorreo(event.target.value)
  }

  return (
    <div>
      <h2>Crear Profesores</h2>
      <form onSubmit={onSubmit}>
        <label>
          Nombres
          <input 
            name="nombres"
            value={nombres}
            onChange={onChange}
          />
        </label>
        <label>
          Apellidos
          <input 
            name="apellidos"
            value={apellidos}
            onChange={onChange}
          />
        </label>
        <label>
          Correo
          <input 
            name="correo"
            value={correo}
            onChange={onChange}
          />
        </label>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default TeacherCreate;