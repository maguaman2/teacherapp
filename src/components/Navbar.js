import './Navbar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to={"/teachers"} className="navlink">
                    Profesores
                </NavLink>

            </li>
            <li>
                <NavLink to={"/courses"} className="navlink">
                    Cursos
                </NavLink>
            </li>
            <li>
                <NavLink to={"/students"} className="navlink">
                    Estudiantes
                </NavLink>
            </li>
        </ul>

    );

}