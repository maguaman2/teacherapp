import { Link } from "react-router-dom";
import './Teachers.css'

function Teacher(props){
   
return(
    <tr > 
        <td>{props.itemTeacher.id}</td>        
        <td> {props.itemTeacher.nombres} </td>
        <td> {props.itemTeacher.apellidos} </td>
        <td>{props.itemTeacher.correo}</td>        
        <td> {props.itemTeacher.sexo} </td>
        <td> {props.itemTeacher.estado_civil} </td>
        <td><Link to={`/updateteacher/${props.itemTeacher.id}`}>Edit</Link></td>
        
    </tr>
);

}
export default Teacher