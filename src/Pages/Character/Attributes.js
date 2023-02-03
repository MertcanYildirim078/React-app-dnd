import { startCase } from 'lodash'

export default function Character({ data }) {
console.log(data.attributes())
    return(
        <div>
            <div className='character-attribute-keys'>
            {
                Object.entries(data.attributes()).map((_attribute, i) => {
                    return (
                        <div key={`att-key-${_attribute[0]}-${i}`}>
                            { startCase(_attribute[0]) }
                        </div>
                    )
                })
            }
            </div>
            <div className='character-attribute-values'>
            {
                Object.entries(data.attributes()).map((_attribute, i) => {
                    return (
                        <div key={`att-val-${_attribute[1]}-${i}`}>
                            { startCase(_attribute[1]) }
                        </div>
                    )
                })
            }
            </div>
        </div> 
    )
}