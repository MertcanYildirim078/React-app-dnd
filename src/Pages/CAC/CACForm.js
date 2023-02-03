import { json } from "react-router-dom";
import Weaver from "weaver-sdk";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function setproperty (node,key,value) {
    node.set(key, value)
}

function CACForm(props) {

    const { id } = useParams()
    const [character, setCharacter] = useState(undefined)

    useEffect(() => {
        (async () => {
            if (id !== 'new') {
                const node = await new Weaver.Query().restrict(id).find();
                setCharacter(node);
            } else {
                setCharacter(new Weaver.Node())
            }
        })();
      }, []);
    
    // formItem: {
    //     component: <input/>,
    //     props: {
    //         type: 'text'
    
    // {
    //     label: 'Class',
    //     FormItem: () => <input type='text'/>
    //         },

    const leftColumnFormItems = [
       
        {
            label: 'Name',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'name',value.target.value)}/>
                },
        {
            label: 'Surname',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'surname',value.target.value)}/>
                },
        {
            label: 'Class',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'class',value.target.value)}/>
                },
        {
            label: 'Gender',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'gender',value.target.value)}/>
            },
        {
            label: 'Race',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'race',value.target.value)}/>
            },
        {
            label: 'Hair color',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'hair color',value.target.value)}/>
            },
        {
            label: 'Skin color',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'skin color',value.target.value)}/>
            },
        {
            label: 'Eye color',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'eye color',value.target.value)}/>
            },
        {
            label: 'Age',
            FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'age',value.target.value)}/>
            },
        {
            label: 'Weight (KG)',
            FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'weight (KG)',value.target.value)}/>
            },
        {
            label: 'Length (CM)',
            FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'length (CM)',value.target.value)}/>
            },
        {
            label: 'Birth place',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'birth place',value.target.value)}/>
            },

    ];
      
    const rightColumnFormItems = [
        
           {
                label: 'Strength',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'strength',value.target.value)}/>},
            {
                label: 'Dexterity',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'dexterity',value.target.value)}/>},
            {
                label: 'Constition',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'constition',value.target.value)}/>},
            {
                label: 'Intelligence',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'intelligence',value.target.value)}/>},
            {
                label: 'Wisdom',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'wisdom',value.target.value)}/>},
            {
                label: 'Charisma',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'charisma',value.target.value)}/>},
            {
                label: 'Character Lore',
                FormItem: () => <textarea rows={11} onChange={(value) => setproperty(props.character,'character lore',value.target.value)}/>,
                className:'Charlore'
                                 },
            ];

        //     const rightColumnFormItems = 
        // ['Strength', 'Dexterity', 'Constition', 'Intelligence', 'Wisdom', 'Charisma'];

    return (
        <form>
            <div className='form-Container'>
                <div className='left-Column'>
                    {
                        leftColumnFormItems.map(({label, FormItem}) => {
                            return (
                                <div key={label} className='left-Column2'> 
                                <label>{ label }</label>
                                <FormItem/>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='right-Column'>
                    {
                        rightColumnFormItems.map(({label, FormItem}) => {
                            return (
                                <div key={label} className='right-Column2'>
                                <label>{ label }</label>
                                <FormItem/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </form>
    )
};

export default CACForm;
