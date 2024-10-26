import { Cards } from './Cards'
import { useContexto } from './contexto';

export function Home() {
    const { estado } = useContexto()

    return (
        <>
            <section className='Section--Home'>
                {estado.data.map((card) =>
                    <Cards card={card} key={card.id} />
                )}
            </section>
        </>
    )
}