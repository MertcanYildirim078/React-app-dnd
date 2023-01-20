import { useEffect, useState } from 'react'
import Weaver from 'weaver-sdk';
import { useParams } from 'react-router-dom'
import Headersdk from './HeaderSDK';
import FooterChar from './footerChar';
function Character() {

    const { id } = useParams()
    const [character, setCharacter] = useState(undefined);

    useEffect(() => {
        async function getAndSetData() {
            var node = await new Weaver.Query().restrict(id).first();
            console.log(node);
            setCharacter(node);
          }
        getAndSetData();
        return undefined;
      }, [])

    if (character !== undefined) {
        return(
            <div>
                <Headersdk character={character}/>
                <div className='Containerkey'>
                {/* // Rewrite this code and use CSS to allow for 2 columns
                // From here */}
                {
                    Object.entries(character.attributes()).map((item) => {
                        return (
                                <>
                                <div className='Itemkey'>{ item[0] }</div>
                                </>
                        )

                    })
                }
                </div>
                <div className='ContainerValue'>
                {
                    Object.entries(character.attributes()).map((item) => {
                        return (
                                <>
                                <div className='Itemvalue'>{ item[1] }</div>
                                </>
                        )

                    })
                }
                </div>
                <FooterChar />
            </div> 
        )
    } else {
        return <div/>
    }
}

export default Character