const urlCrud = 'http://localhost:3001';


const getListTeachers = async () => {
    const response = await fetch(`${urlCrud}/teachers`);  
    const data = await response.json();     
    return  data;
}
// Obtener solo un id
const findByIdTeacher = async (teacherId) => {
    const response = await fetch(`${urlCrud}/teachers/${teacherId}`);  
    const data = await response.json();     
    return  data;
}

const createTeacher = async (teacher) => {

    const resp = await fetch(`${urlCrud}/teachers`, {
        method: 'POST',
        body: JSON.stringify(teacher),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateTeacher = async (teacher) => {
  
    const resp = await fetch(`${urlCrud}/teachers`, {
        method: 'PUT',
        body: JSON.stringify(teacher),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListTeachers,
    createTeacher,
    updateTeacher,
    findByIdTeacher

}