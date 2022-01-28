import { useParams } from "react-router-dom";

function Course(){
    const { id } = useParams()
    console.log('id ...  '+id)
return(
    <p>
       Pagina individual de: .. {id}
    </p>
);

}
export default Course