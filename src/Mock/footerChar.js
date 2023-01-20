import { Link } from "react-router-dom"


function FooterChar() {
    return(
        <Link to= {'/Charlist'}><button className='Footerchar'>Save</button></Link>
    )
}

export default FooterChar