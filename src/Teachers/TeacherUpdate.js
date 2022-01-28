import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdTeacher,updateTeacher } from '../service/TeacherService'
import './Teachers.css'

function TeachersPage() {
  
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState({nombres:'',apellidos:'',correo:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateTeacher(teacher);
  }
  const onChange = (event) =>{
    if(event.target.name==='nombres')
      setTeacher({...teacher,nombres:event.target.value})    
    if(event.target.name==='apellidos')    
      setTeacher({...teacher,apellidos:event.target.value})
    if(event.target.name==='correo')
      setTeacher({...teacher,correo:event.target.value})
  }

  useEffect(() => {    
    findByIdTeacher(teacherId).then(data => {
      setTeacher(data);  
    }
    );
  }, [teacherId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actulizar profesor</h2>
  
          <input 
          className="formUpdateInput"
            name="nombres"
            placeholder="Nombres" 
            value={teacher.nombres}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
           placeholder="Apellidos" 
            name="apellidos"
            value={teacher.apellidos}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="Correo"
            name="correo"
            value={teacher.correo}
            onChange={onChange}
          />
        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default TeachersPage;