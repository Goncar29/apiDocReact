import '../styles/Dentista.css'
import { useParams } from "react-router-dom";
import { useContexto } from './contexto';


export function Dentista() {
    const { estado } = useContexto()
    const { id } = useParams()
    const cardId = estado.data.find(card => card.id == id);
    const textColor = estado.tema === "darkblue" ? "white" : "black";
    return (
        <section className='card--section' style={{ backgroundColor: estado.tema === 'darkblue' ? '#191919' : 'white' }}>
            <ul className='card--info' style={{ backgroundColor: estado.tema }}>
                <li className='card--list' key={cardId.id}>
                    <span style={{ color: textColor }}>{cardId.name}</span>
                    <span style={{ color: textColor }}>{cardId.phone}</span>
                    <span style={{ color: textColor }}>{cardId.email}</span>
                    <span style={{ color: textColor }}>{cardId.website}</span>
                </li>
            </ul>
        </section>
    )
}