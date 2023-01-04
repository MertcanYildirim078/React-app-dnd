import { Link } from "react-router-dom" 

function HeaderList() {
    return(
        <div className="Headerform">
        <Link to= {'/Charlist'}><button className="Back">Back</button></Link> 
        <h1>Create a Character</h1>
        </div>
    )
   
}
export default HeaderList