import CACForm from './CACForm';
import HeaderList from './headerForm';
import FooterList from './footerForm';
function CACP() {
    return(
    <div>
        <div className='row'>
        <HeaderList />
        </div>
        <div className='row'>
        <CACForm />
        </div>
        <div className='row'>
        <FooterList />
        </div>
    </div>
    )
};

export default CACP;