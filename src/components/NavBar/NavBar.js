import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img width={'100px'} src={logo} alt="logo"/>
            </div>
            <div>
                <ul>
                    <li>
                    <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/">Inicio</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/products/BMW">BMW</NavLink>
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