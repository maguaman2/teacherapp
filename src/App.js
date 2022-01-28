import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CoursesPage from './courses/CoursesPage';
import TeachersPage from './Teachers/TeachersPage';
import TeacherCreate from './Teachers/TeacherCreate';
import TeacherUpdate from './Teachers/TeacherUpdate';
import Course from './courses/Course';
import Navbar from "./components/Navbar";

function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/courses" element={ <CoursesPage />   }/>         
        <Route path="/course" element={ <Course />   }/>                 
        <Route path="/createteacher" element={ <TeacherCreate />   }/>   
        <Route path="/updateteacher/:teacherId" element={ <TeacherUpdate />   }/>   
        
      </Routes>

    </BrowserRouter>   
  );
}

export default App;