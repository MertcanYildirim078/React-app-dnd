import { Link } from "react-router-dom";

function HeaderList() {
    return (
        <div className="Headerlist">
        <Link to={'/'}><button className="Backlist">Back</button></Link>
        {/* <Link><button>Filter</button></Link> */}
        <h1 className="Titlelist">Character list</h1>
        <Link to={'/CACP/new'}><button className="CACbutton">Create a character</button></Link>
        </div>
    );
}

export default HeaderList