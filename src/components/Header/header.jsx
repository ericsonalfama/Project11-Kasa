import logo from '../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

function Header() {
    const location = useLocation();

    return (
        <header>
            <nav className='header'>
                <Link 
                    to="/"
                    className={`header__element ${location.pathname === '/' ? 'active' : ''}`}>
                    <img src={logo} alt="Logo Kasa" className='header__logo' />
                </Link>
                
                <ul className='header__nav'>
                    <Link
                        to="/"
                        className={`header__element ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/about"
                        className={`header__element ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        A Propos
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

