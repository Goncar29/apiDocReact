import { useContexto } from "./contexto";
import { Cards } from "./Cards";

export function Favs () {
    const { estado } = useContexto()

    return (
        <section style={{backgroundColor: estado.tema}}>
            <h1>Favoritos</h1>
            {estado.favs.map((card) => 
                <div key={card.id}>
                    <Cards card={card} />
                </div>
                
            )}
        </section>
    )
}