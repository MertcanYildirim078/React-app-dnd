import { Link, useNavigate } from "react-router-dom"

export default function Header({ data }) {
    const navigate = useNavigate();
    return(
        <div>
            <div className="character-header">
                <Link to={'/characters'}>
                    <button className="character-header-back-button">Back</button>
                </Link>
                <h1 className="character-name-title">{data.get('name')}</h1>
                <Link to={`/create-character/${data.id()}`}>
                    <button className="edit-character">Edit</button>
                </Link>
            </div> 
                <button 
                    onClick={async () => {
                        await data.destroy() 
                        navigate('/characters')
                    }
                    }
                    className="character-header-delete-button">Delete</button>
      </div>
    )
}