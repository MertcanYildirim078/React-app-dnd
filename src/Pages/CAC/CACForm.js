import { json } from "react-router-dom";
import Character from "../../Mock/Character";

function setproperty (node,key,value) {
node.set(key, value)
}

function CACForm(props) {
    
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
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'Name',value.target.value)}/>
                },
        {
            label: 'Surname',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'Surname',value.target.value)}/>
                },
        {
            label: 'Class',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'Class',value.target.value)}/>
                },
        {
            label: 'Gender',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'Gender',value.target.value)}/>
            },
        {
            label: 'Race',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'Race',value.target.value)}/>
            },
        {
            label: 'Hair color',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'Hair color',value.target.value)}/>
            },
        {
            label: 'Skin color',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'Skin color',value.target.value)}/>
            },
        {
            label: 'Eye color',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'Eye color',value.target.value)}/>
            },
        {
            label: 'Age',
            FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'Age',value.target.value)}/>
            },
        {
            label: 'Weight (KG)',
            FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'Weight (KG)',value.target.value)}/>
            },
        {
            label: 'Length (CM)',
            FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'Length (CM)',value.target.value)}/>
            },
        {
            label: 'Birth place',
            FormItem: () => <input type='text' onChange={(value) => setproperty(props.character,'Birth place',value.target.value)}/>
            },

    ];

    const formItemRegistry = {
        string: <input type="text"/>,
        number: <input type="number"/>,
        multiLine: <textarea rows='11'/>
      }
      
    const rightColumnFormItems = [
        
           {
                label: 'Strength',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'Strength',value.target.value)}/>},
            {
                label: 'Dexterity',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'Dexterity',value.target.value)}/>},
            {
                label: 'Constition',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'Constition',value.target.value)}/>},
            {
                label: 'Intelligence',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'Intelligence',value.target.value)}/>},
            {
                label: 'Wisdom',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'Wisdom',value.target.value)}/>},
            {
                label: 'Charisma',
                FormItem: () => <input type='number' onChange={(value) => setproperty(props.character,'Charisma',value.target.value)}/>},
            {
                label: 'Character Lore',
                FormItem: () => <textarea rows={11} onChange={(value) => setproperty(props.character,'Character Lore',value.target.value)}/>,
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
                        rightColumnFormItems.map(({label, type}) => {
                            return (
                                <div key={label} className='right-Column2'>
                                <label>{ label }</label>
                                {
                                    formItemRegistry[type]
                                }
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
