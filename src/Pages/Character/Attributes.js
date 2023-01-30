export default function Character({ data }) {

    return(
        <div>
            <div className='character-attribute-keys'>
            {
                Object.entries(data.attributes()).map((item, i) => {
                    return (
                        <div
                            className='Itemkey'
                            key={`att-key-${item[0]}-${i}`}
                        >
                            { item[0] }
                        </div>
                    )
                })
            }
            </div>
            <div className='character-attribute-values'>
            {
                Object.entries(data.attributes()).map((item, i) => {
                    return (
                        <div
                            className='Itemvalue'
                            key={`att-val-${item[1]}-${i}`}
                        >
                            { item[1] }
                        </div>
                    )
                })
            }
            </div>
        </div> 
    )
}