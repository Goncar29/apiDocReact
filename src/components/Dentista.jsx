import '../styles/Dentista.css'
import { useParams } from "react-router-dom";
import { useContexto } from './contexto';


export function Dentista() {
    const { estado } = useContexto()
    const { id } = useParams()
    const cardId = estado.data.find(card => card.id == id);
    return (
        <section className='card--section' style={{ backgroundColor: estado.tema }}>
            <ul className='card'>
                <li className='card--list' key={cardId.id}>
                    <span>{cardId.name}</span>
                    <span>{cardId.phone}</span>
                    <span>{cardId.email}</span>
                    <span>{cardId.website}</span>
                </li>
            </ul>
        </section>
    )
}