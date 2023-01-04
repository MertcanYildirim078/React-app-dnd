function CACForm() {
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
            label: 'Name + Surname',
            FormItem: () => <input type='text'/>
                },
        {
            label: 'Class',
            FormItem: () => <input type='text'/>
                },
        {
            label: 'Gender',
            FormItem: () => <input type='text'/>
            },
        {
            label: 'Race',
            FormItem: () => <input type='text'/>
            },
        {
            label: 'Hair color',
            FormItem: () => <input type='text'/>
            },
        {
            label: 'Skin color',
            FormItem: () => <input type='text'/>
            },
        {
            label: 'Eye color',
            FormItem: () => <input type='text'/>
            },
        {
            label: 'Age',
            FormItem: () => <input type='number'/>
            },
        {
            label: 'Weight (KG)',
            FormItem: () => <input type='number'/>
            },
        {
            label: 'length (CM)',
            FormItem: () => <input type='number'/>
            },
        {
            label: 'Birth place',
            FormItem: () => <input type='text'/>
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
                type: 'number'   },
            {
                label: 'Dexterity',
                type: 'number'   },
            {
                label: 'Constition',
                type: 'number'   },
            {
                label: 'Intelligence',
                type: 'number'   },
            {
                label: 'Wisdom',
                type: 'number'   },
            {
                label: 'Charisma',
                type: 'number'   },
            {
                label: 'Character Lore',
                type: 'multiLine',
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
