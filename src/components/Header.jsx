import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
import { useContexto } from './contexto';
import { useState } from 'react';

export function Header() {
    const { estado, dispatch } = useContexto();
    const [isDarkMode, setIsDarkMode] = useState(estado.tema === 'darkblue');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleTheme = () => {
        const newMode = isDarkMode ? 'lightblue' : 'darkblue';
        dispatch({ type: 'CHANGE', payload: newMode });
        setIsDarkMode(!isDarkMode);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const routes = [
        { to: '/', text: 'Inicio' },
        { to: '/favs', text: 'Favoritos' },
        { to: '/contact', text: 'Contacto' }
    ];

    return (
        <nav style={{ backgroundColor: estado.tema }}>
            <button
                className={`burger-button ${menuOpen ? 'menu-open' : ''}`}
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
            >
                <span className="burger-bar"></span>
                <span className="burger-bar"></span>
                <span className="burger-bar"></span>
            </button>

            <ul className="nav-links">
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? 'red' : estado.tema === 'darkblue' ? 'lightblue' : 'darkblue',
                        })}
                            to={route.to}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <h2 className="header-title">Servicio Virtual de Médicos</h2>

            <button
                aria-label={`Activar ${isDarkMode ? 'modo claro' : 'modo oscuro'}`}
                onClick={toggleTheme}
                className="buttonHeader"
            >
                {isDarkMode ? (
                    <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                ) : (
                    <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                )}
            </button>

            {menuOpen && (
                <div className="mobile-menu">
                    <ul>
                        {routes.map(route => (
                            <li key={route.to} onClick={() => setMenuOpen(false)}>
                                <NavLink className="mobile-link" to={route.to}>
                                    {route.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
