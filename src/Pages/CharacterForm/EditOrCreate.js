import Weaver from "weaver-sdk";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './index.css'

export default function CreateEditForm() {

    const { id } = useParams()
    const [character, setCharacter] = useState(undefined)
    const [actionText, setActionText] = useState('')
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        (async () => {
            if (id !== 'new') {
                const node = await new Weaver.Query().restrict(id).find();
                setCharacter(node);
                setActionText('Edit')
            } else {
                setCharacter(new Weaver.Node())
                setActionText('Create')
            }
        })();
      }, [id]);

    const onSubmit = async (formData) => {
        Object.keys(formData).forEach(function(key) {
            character.set(key, formData[key])
        });
        await character.save()
    }

    return (
        <div className='edit-or-create-form-container'>
            <div>
                <div className="edit-or-create-form-header">
                    <Link to= {'/characters'}>
                        <button className="edit-or-create-form-header-back-button">Back</button>
                    </Link> 
                    <h1 className="edit-or-create-form-title">{ actionText } a Character</h1>
                </div>
            </div>
            
            <div>
                <Link to= {'/characters'}>
                    <input 
                        type="submit"
                        className='edit-or-create-form-footer'
                        value="Save"
                    />
                </Link>
            </div>
        </div>
    )
}