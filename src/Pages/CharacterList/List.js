import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import Weaver from 'weaver-sdk';

export default function Characterlist() {

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
        <div className="character-list">
            {
                characters.map((item) => 
                    <Link
                        key={item.id()}
                        to={item.id()}
                        style={style}
                    >
                        <div>{item.get('name')}</div>
                    </Link>
                )
            }
        </div> 
    )
}