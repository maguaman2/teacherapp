
import './Teachers.css'
function Teacher(props){
return(
    <li className="itemTeacher"> 
        <h1>{props.itemTeacher.lastname}</h1>        
        <h2> {props.itemTeacher.name} </h2>
        <h3> {props.itemTeacher.age} </h3>
    </li>
);

}
export default Teacher