import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import Weaver from 'weaver-sdk';

function Characterlist() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function getAndSetData() {
            var nodes = await new Weaver.Query().hasRelationOut('type', 'character').find();
            setCharacters(nodes);
          }
        getAndSetData();
        return undefined;
      }, [])

    const style = {
        color: 'red'
    }

    return(
        <div className="CharacterContainer">
            {
            characters.map((item) => 
                <Link
                    key={item.id()}
                    to={item.id()}
                    style={style}
                >
                    <div className="Listitem">{item.get('Name')}</div>
                </Link>
            )
            }
        </div> 
    )
}

export default Characterlist