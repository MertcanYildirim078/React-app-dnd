import {Link} from 'react-router-dom';
function Home() {
    return(
        <div className='Home'><h1 className='Title'> D&D Character Creator </h1>
        <h2 className='Intro'>Welcome to the Character Creator of D&D!
            Here you will have a list with characters where
            you can store them, you can fill it by creating characters 
            by clicking the button below. You can also go to your 
            character list if you wish to.</h2>
            <div className='Homebuttons'>
                <Link to={'/Charlist'}><button className='Charbutton'>Character list</button></Link>
                <Link to={'/CACP/new'}><button className='Createbutton'>Create a character</button></Link>
            </div>
            </div>
            
    )
};

export default Home