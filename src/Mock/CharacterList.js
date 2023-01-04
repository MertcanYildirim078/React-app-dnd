import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import Weaver from 'weaver-sdk';

function Characterlist() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      const makeConnection = async () => {
        var weaver = undefined;
        try {
            weaver = Weaver.getInstance();
        } catch(e) {
            weaver = new Weaver();
            await weaver.connect('https://demo.weaverplatform.com/');
            await weaver.signInWithUsername('myildirim', '2it2M3m*UGup');
            await weaver.useProject('dnd');
        }
        var nodes = await new Weaver.Query().hasRelationOut('type', 'character').find();
        setCharacters(nodes);
      }
      makeConnection();
      return undefined;
    }, [])

    const style = {
        color: 'red'
    }
    return(
        <div className="CharacterContainer">
            {
            characters.map((item) => 
                <Link to={'Argus'} style = {style}>
                    <div className="Listitem">{item.get('name')}</div>
                </Link>
            )
            }
        </div> 
    )
}

export default Characterlist