import Weaver from "weaver-sdk";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { leftColumnFormItems, rightColumnFormItems } from "./formItems";
import { startCase } from 'lodash';
import './index.css'

export default function CreateEditForm() {

    const { id } = useParams()
    const [character, setCharacter] = useState(undefined)
    const [actionText, setActionText] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            if (id !== 'new') {
                const node = await new Weaver.Query().restrict(id).first();
                setCharacter(node);
                setActionText('Edit')
            } else {
                setCharacter(new Weaver.Node())
                setActionText('Create')
            }
            setIsLoading(false)
        })();
      }, [id]);

    const onFormSubmit = async (formData) => {
        Object.keys(formData).forEach(function(key) {
            character.set(key, formData[key])
        });
        if (id === 'new') {
            character.relation('type').add(Weaver.Node.get('character'))
        }
        await character.save()
        navigate('/characters')
    }

    const Header = () =>
        <div className="edit-or-create-form-header">
            
            <Link to= {'/characters'}>
                <button className="edit-or-create-form-header-back-button">Back</button>
            </Link> 

            <h1 className="edit-or-create-form-title">{ actionText } a Character</h1>

            <div></div>
        </div>

    const Footer = () => 
        <input 
            type="submit"
            className='edit-or-create-form-footer'
            value="Save"
        />

    const LeftColumn = () =>
        <div className="left-column-container">
            <div className='left-column'>
                {
                    leftColumnFormItems.map(({ name, type}) => 
                        <div
                            className='left-column-items'
                            key={name}
                        >
                            <label>{ startCase(name) }</label>
                            <input
                                className="edit-or-create-left-column-input"
                                defaultValue={character.attributes()[name] || ' '}
                                type={type}
                                name={name}
                                {...register(name)}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    const RightColumn = () =>
        <div className="right-column-container">
            <div className='right-column'>
                {
                    rightColumnFormItems.map(({ name, type}) => 
                        <div
                            className='right-column-items'
                            key={name}
                        >
                            <label>{ startCase(name) }</label>
                            <input
                                className="edit-or-create-right-column-input"
                                defaultValue={character.attributes()[name] || ' '}
                                type={type}
                                name={name}
                                {...register(name)}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    if (!isLoading) {
        return (
            <div className='edit-or-create-form-container'>
                <Header />
                <form onSubmit={ handleSubmit(onFormSubmit) }>
                    <LeftColumn />
                    <RightColumn />
                    <Footer />
                </form>
            </div>
        )
    } else {
        return <div/>
    }
}