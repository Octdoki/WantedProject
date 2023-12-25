import { Link } from 'react-router-dom';
import { HeaderWrap } from './headerStyle';
import NavBar from './NavBar';
const Header = () => {
    return (
        <HeaderWrap>
            <div className='inner'>
                <div className="start-container">
                    <div className="logo-wrap"> 
                        <h1>
                            <Link to={`/`}><img src="./images/logo.svg" alt="logo" /></Link>
                        </h1>
                    </div>
                    <NavBar />
                </div>
            </div>
        </HeaderWrap>
    );
};

export default Header;