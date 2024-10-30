import '../styles/Footer.css'

export function Footer() {

    return (
        <footer>
            <div>
                <a href="/">
                    <span>⬅️ Back to top</span>
                </a>
            </div>
            <div>
                <p>
                    Servicios para clientes para contactar médicos de su preferencias.
                </p>
                <ul className='footer--lista'>
                    <li>
                        <a href="/"> About </a>
                    </li>
                    <li>
                        <a href="/"> Services </a>
                    </li>
                    <li>
                        <a href="/"> Projects </a>
                    </li>
                    <li>
                        <a href="/"> Blog </a>
                    </li>
                </ul>
            </div>
            <p>
                Copyright &copy; 2024. All rights reserved.
            </p>
        </footer>
    )
}