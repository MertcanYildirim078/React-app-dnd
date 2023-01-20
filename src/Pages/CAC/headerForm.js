import { Link } from "react-router-dom" 

function HeaderForm() {
    return(
        <div className="Headerform">
        <Link to= {'/Charlist'}><button className="Back">Back</button></Link> 
        <h1 className="Formtitle">Create a Character</h1>
        <div></div>
        </div>
    )
   
}
export default HeaderForm