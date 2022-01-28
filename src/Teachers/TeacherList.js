
function TeacherList(props){
return(
    <table>
    <thead >
      <tr>
        <th >Id</th>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Correo</th>
        <th>Sexo</th>
        <th>Estado Civil</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default TeacherList