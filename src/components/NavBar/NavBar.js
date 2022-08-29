import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img width={'100px'} src={logo} alt="logo"/>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Conocenos</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}


export default NavBar;