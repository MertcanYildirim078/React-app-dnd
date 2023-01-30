import Weaver from 'weaver-sdk'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Header from './Header';
import Attributes from './Attributes';
import './index.css';
    
export default function Character() {

    const { id } = useParams()
    const [character, setCharacter] = useState(undefined);

    useEffect(() => {
        async function getAndSetData() {
            var node = await new Weaver.Query().restrict(id).first();
            setCharacter(node);
          }
        getAndSetData();
        return undefined;
      })

    if (character !== undefined) {
        return(
            <div>
                <Header data={character}/>
                <Attributes data={character}/>
            </div> 
        )
    } else {
        return <div/>
    }
}