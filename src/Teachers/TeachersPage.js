import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeacherList from './TeacherList';
import Teacher from './Teacher'
import { getListTeachers } from '../service/TeacherService'

function TeachersPage() {

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    
    getListTeachers().then(data => {
      setTeachers(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de docentes</h2>
      <Link to='/createteacher' >
        Crear
      </Link>
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