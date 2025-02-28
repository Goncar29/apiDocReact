import '../styles/Cards.css';
import React from 'react';
import { useContexto } from './contexto'; // Importar el contexto

export function Cards({ card }) {
    const { estado, dispatch } = useContexto();

    const isFavorite = estado.favs.some(fav => fav.id === card.id);

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: 'REMOVE_FAVS', payload: card });
        } else {
            dispatch({ type: 'FAVS', payload: card });
        }
    };

    return (
        <div className="cards">
            <div className="card-header">
                <h3>{card.name}</h3>
            </div>
            <div className="card-body">
                <span>Phone: {card.phone}</span>
                <span>Email: {card.email}</span>
                <span>Website: {card.website}</span>
            </div>
            <div className="card-footer">
                <button
                    className={isFavorite ? 'active' : ''}
                    onClick={toggleFavorite}
                >
                    {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                </button>
            </div>
        </div>
    );
}