import { Link } from 'react-router-dom';
import './index.css'

// <Link /> allows you to navigate to a page ('to' property should match a 'path' assigned in a <Route/>) 
// https://reactrouter.com/en/main/components/link

function Home() {
    return(
        <div className='home'>
            <h1 className='title'> D&D Character Creator </h1>
            <h2 className='intro'>
                Welcome to the Character Creator of D&D!
                Here you will have a list with characters where
                you can store them, you can fill it by creating characters 
                by clicking the button below. You can also go to your 
                character list if you wish to.
            </h2>
            <div className='home-nav-buttons'>
                <Link to={'/characters'}>
                    <button>Character list</button>
                </Link>
                <Link to={'/create-character/new'}>
                    <button>Create a character</button>
                </Link>
            </div>
        </div>      
    )
};

export default Home