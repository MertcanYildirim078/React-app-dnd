import Header from './Header';
import List from './List';
import './index.css'

export default function CharacterList() {
    return (
        <div className='characterlist-body'>
            <Header/>
            <List/>
        </div>
    )
}