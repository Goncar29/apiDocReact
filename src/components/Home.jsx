import '../styles/Home.css'
import { Cards } from './Cards'
import { useContexto } from './contexto';

export function Home() {
    const { estado } = useContexto()

    return (
        <>
            <section className='Section--Home' style={{ backgroundColor: estado.tema === 'darkblue' ? '#191919' : 'white' }}>
                {estado.data.map((card) =>
                    <Cards card={card} key={card.id} />
                )}
            </section>
        </>
    )
}