import React, { useState, useEffect } from "react";
import TeacherList from './TeacherList';
import Teacher from './Teacher'
import { getListTeachers, createTeacher } from '../service/TeacherService'

function TeachersPage() {
  //asincronía JavaScript
  const [teachers, setTeachers] = useState([]);

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

  useEffect(() => {    
    getListTeachers().then(data => {
      setTeachers(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de docentes</h2>
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
      <TeacherList>      
        {
          teachers.map(item =>
            <Teacher
              key={item.id}
              itemTeacher={item} />
          )
        }
      </TeacherList>
    </div>
  );
}

export default TeachersPage;