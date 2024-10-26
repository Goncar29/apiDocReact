import { useContexto } from "./contexto";
import { Cards } from "./Cards";

export function Favs() {
    const { estado } = useContexto()

    return (
        <section className="Section--Favs">
            <h1>Favoritos</h1>
            <aside className="Aside--Favs">
                {estado.favs.map((card) =>
                    <div key={card.id}>
                        <Cards card={card} />
                    </div>
                )}
            </aside>
        </section>
    )
}