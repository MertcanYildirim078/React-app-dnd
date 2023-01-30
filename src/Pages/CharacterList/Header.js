import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="character-list-header">
            <Link to={'/'}>
                <button className="character-list-back-button">Back</button>
            </Link>
            <h1 className="character-list-title">Character list</h1>
            <Link to={'/create-character/new'}>
                <button className="create-character-button">Create a character</button>
            </Link>
        </div>
    );
}

export default Header