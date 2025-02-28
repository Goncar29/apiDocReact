import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
import { useContexto } from './contexto';
import { useEffect, useState } from 'react';

export function Header() {
    const { estado, dispatch } = useContexto();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const isDark = document.body.classList.contains('darkblue');
        setIsDarkMode(isDark);
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.body.classList.add("darkblue");
            document.body.classList.remove("lightblue");
            dispatch({ type: "CHANGE", payload: "darkblue" });
        } else {
            document.body.classList.remove("darkblue");
            document.body.classList.add("lightblue");
            dispatch({ type: "CHANGE", payload: "lightblue" });
        }
    };

    const routes = [
        { to: '/', text: 'Home' },
        { to: '/favs', text: 'Favs' },
        { to: '/contact', text: 'Contact' }
    ];

    return (
        <nav style={{ backgroundColor: estado.tema }}>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? 'red' : estado.tema === 'darkblue' ? 'lightblue' : 'darkblue',

                            })}
                            to={route.to}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <h2 style={{ color: estado.tema === 'darkblue' ? 'lightblue' : 'darkblue' }}>Servicio Virtual de Médicos</h2>
            <button aria-label="buttom dark mode" onClick={toggleTheme} className="buttonHeader">
                {!isDarkMode ? (
                    <svg
                        className="sun-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
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
                ) : (
                    <svg
                        className="moon-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                )}
            </button>
        </nav>
    );
}
