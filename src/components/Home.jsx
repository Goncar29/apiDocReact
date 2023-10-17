import { Cards } from './Cards'
import { useContexto } from './contexto';

export function Home(){
    const { estado } = useContexto()

    return (
        <>
            {estado.data.map((card) => 
                <div key={card.id}>
                    <Cards card={card} />
                </div>
                
            )}
        </>
    )
}