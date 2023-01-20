import { Link } from "react-router-dom"

function Headersdk(props) {
    console.log(props)
    return(
        <div className="Charheadersdk">
            <Link to={'/Charlist'}><button className="Backchar">Back</button></Link>
            <h1>{props.character.get('Name')}</h1>
            <div></div>
        </div> 
    )
}

export default Headersdk