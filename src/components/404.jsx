import "../styles/404.css";
import { useContexto } from './contexto';

export function PageNotFound() {
    const { estado } = useContexto()
    const textColor = estado.tema === "darkblue" ? "white" : "black";

    return (
        <section className="error--404" style={{ backgroundColor: estado.tema }}>
            <div className="error--404-div">
                <h1 className="error--404-titulo" style={{ color: textColor }}>404</h1>


                <p className="error--404-P1">Uh-oh!</p>

                <p className="error--404-p2">We can't find that page.</p>

                <a className="error--404-anchor"
                    href="/"
                >
                    Go Back Home
                </a>
            </div>
        </section>
    )
}