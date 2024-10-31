import '../styles/Header.css'
import { NavLink } from 'react-router-dom';
import { useContexto } from './contexto';

export function Header() {

    const { dispatch } = useContexto()

    const changeTheme = () => { dispatch({ type: 'CHANGE', payload: 'darkblue' }) }

    return (
        <nav>
            <ul>
                {routes.map(route => {
                    return (
                        <li key={route.to}>
                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? 'red' : '#747bff',
                                })}
                                to={route.to}
                            >{route.text}</NavLink>
                        </li>
                    )
                })}
            </ul>
            <button className='buttonHeader'
                onClick={changeTheme}
            >Change theme
            </button>
        </nav>
    );
}

const routes = [];
routes.push({
    to: '/',
    text: 'Home',
});
routes.push({
    to: '/contact',
    text: 'Contact',
});
routes.push({
    to: '/favs',
    text: 'Favs',
});
