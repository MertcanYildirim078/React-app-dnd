import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import Weaver from 'weaver-sdk';
import { startCase } from "lodash";

// lodash is a library providing functions to make tasks easier: https://lodash.com/docs/
// We are using startCase method from lodash: https://lodash.com/docs/4.17.15#startCase 

export default function Characterlist() {

    // useState stores 'characters' in component state: https://reactjs.org/docs/hooks-state.html
    // 'characters' can be updated by using 'setCharacters()'
    const [characters, setCharacters] = useState([]);

    // useEffect used to fire getAndSetData() after render.
    // useEffect can be used to fire at different stages of a components lifecycle: https://blog.logrocket.com/using-react-useeffect-hook-lifecycle-methods/
    useEffect(() => {
        // Gets Weaver Nodes from the database using Weaver.Query()
        // Returned value from Weaver.Query() is an array of Weaver.Nodes that have a 'type' relation to the Weaver.Node with id 'character'
        async function getAndSetData() {
            var nodes = await new Weaver.Query().hasRelationOut('type', 'character').find();
            setCharacters(nodes);
          }
        getAndSetData();
        return undefined;
      }, [])

    return(
        <div className="character-list">
            {
                // Iterates over the 'characters' array
                // The value associated with the 'name' key is rendered to the screen
                characters.map((_character) => 
                    <Link
                        key={_character.id()}
                        to={_character.id()}
                    >
                        <div className="character-list-name">{ startCase(_character.get('name')) }</div>
                    </Link>
                )
            }
        </div> 
    )
}