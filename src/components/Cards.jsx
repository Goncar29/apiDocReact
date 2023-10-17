import '../styles/Cards.css'
import { Link } from "react-router-dom";
import { useContexto } from './contexto';


export function Cards({ card }){
    const { estado, dispatch } = useContexto()

    const addFavs = () => { dispatch({type: 'FAVS', payload: card  })}
    const removeFavs = () => { null }

    return (
        <>
            <section style={{backgroundColor: estado.tema}}>
                    <div className='cards' key={card.id}>
                        <strong>
                            <Link to={`/dentista/${card.id}`}>
                                {card.name}
                            </Link>
                        </strong>
                        <strong>{card.username}</strong>
                        {estado.favs
                            ? <button onClick={addFavs}>Agregar a favoritos </button>
                            : <button onClick={removeFavs}>Remover de favoritos </button>}
                        
                    </div> 
            </section>
        </>
    )
}

