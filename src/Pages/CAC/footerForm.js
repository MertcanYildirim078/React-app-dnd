import { Link } from "react-router-dom"


function FooterList(props) {
    function Onsave(character) {
        character.save()
    }
    return(
        <div>
        <Link to= {'/Charlist'}><button onClick={() => Onsave(props.character)}className='Footer'>Save</button></Link>
        {/* <h1>{props.character.get('name')}</h1> */}
        </div>
    )
}

export default FooterList