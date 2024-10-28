import '../styles/Cards.css'
import { Link } from "react-router-dom";
import { useContexto } from './contexto';


export function Cards({ card }) {
    const { estado, dispatch } = useContexto()

    const isFavorite = estado.favs.some(fav => fav.id === card.id); // Verifica si ya es favorito

    const addFavs = () => {
        if (!isFavorite) {
            dispatch({ type: 'FAVS', payload: card });
        }
    };

    const removeFavs = () => {
        dispatch({ type: 'REMOVE_FAVS', payload: card });
    };

    return (
        <>
            <div className='cards' key={card.id} style={{ backgroundColor: estado.tema }}>
                <strong>
                    <Link to={`/dentista/${card.id}`}>
                        {card.name}
                    </Link>
                </strong>
                <strong>{card.username}</strong>
                {!isFavorite
                    ? <button onClick={addFavs}>Agregar a favoritos </button>
                    : <button onClick={removeFavs}>Remover de favoritos </button>}

            </div>
        </>
    )
}

