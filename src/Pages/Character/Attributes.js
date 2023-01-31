import { startCase } from 'lodash'

export default function Character({ data }) {

    return(
        <div>
            <div className='character-attribute-keys'>
            {
                Object.entries(data.attributes()).map((item, i) => {
                    return (
                        <div key={`att-key-${item[0]}-${i}`}>
                            { startCase(item[0]) }
                        </div>
                    )
                })
            }
            </div>
            <div className='character-attribute-values'>
            {
                Object.entries(data.attributes()).map((item, i) => {
                    return (
                        <div key={`att-val-${item[1]}-${i}`}>
                            { startCase(item[1]) }
                        </div>
                    )
                })
            }
            </div>
        </div> 
    )
}