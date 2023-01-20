import { useEffect, useState } from 'react'
import Weaver from 'weaver-sdk';
import { useParams } from 'react-router-dom'
import CACForm from './CACForm';
import FooterList from './footerForm';
import HeaderForm from './headerForm';

function CACP() {
    const { id } = useParams()
    const [character, setCharacter] = useState(undefined);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function getAndSetData() {
            var node = undefined
            try {
                node = await new Weaver.Query().restrict(id).first();
            } catch (error) {
                node = new Weaver.Node() 
                node.relation('type').add(Weaver.Node.get('character'))
            }
            
            console.log(id)
            console.log(node);
            setCharacter(node);
            setLoading(false)
          }
        getAndSetData();
        return undefined;
      }, [])
      
      if(loading===false) {
        return(
            <div>
            <div className='row'>
            <HeaderForm />
            </div>
            <div className='row'>
            <CACForm character={character}/>
            </div>
            <div className='row'>
            <FooterList character={character}/>
            </div>
        </div>
        )
        } else {
            return(
                <div>loading</div>       
            )
        
      }}  

export default CACP;