import { Link } from "react-router-dom"

export default function Header({ data }) {
    return(
        <div className="character-header">
            <Link to={'/characters'}>
                <button className="character-header-back-button">Back</button>
            </Link>
            <h1>{data.get('Name')}</h1>
            <button className="edit-character">Edit</button>
        </div> 
    )
}