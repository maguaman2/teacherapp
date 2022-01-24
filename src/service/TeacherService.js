const urlCrud = 'http://localhost:3001';


const getListTeachers = async () => {
    const response = await fetch(`${urlCrud}/teachers`);  
    const data = await response.json();     
    return  data;
}

const createTeacher = async (teacher) => {
        console.log(teacher);
    const resp = await fetch(`${urlCrud}/teachers`, {
        method: 'POST',
        body: JSON.stringify(teacher),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListTeachers,
    createTeacher

}