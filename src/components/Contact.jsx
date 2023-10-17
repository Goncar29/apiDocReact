import { useEffect, useState, useRef } from 'react';
import '../styles/Contact.css'
import { useContexto } from './contexto';

export function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const inputRefName = useRef(true)

    const { estado } = useContexto()

    const getNombre = (name) => {
        if (name) {
            setNombre(name)
        } 
        console.log(name);
    }
    const getMail = (email) => {
        if (email) {
            setMail(email)
        } 
        console.log(email);
    }


    const handleChangeName = (event) => {
        const newName = event.target.value
        setName(newName)
    }
    const handleChangeEmail = (event) => {
        const newEmil = event.target.value
        setEmail(newEmil.trim())
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        getNombre(name)
        getMail(email)
    }
    
    useEffect(() => {
        if (inputRefName.current) {
            inputRefName.current = name === ''
            return
        }
        if (name.length < 5){
            console.log(name);
            setError('Por favor verifique su información nuevamente')
            return
        } else { 
            setError(null)
        }
        console.log(name);
    }, [name])



    return (
        <section style={{backgroundColor: estado.tema}}>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    ref={inputRefName}
                    name='name'
                    type="text"
                    placeholder='Nombre'
                    onChange={handleChangeName}
                    value={name}
                >
                </input>

                <input 
                    type="text"
                    name='email'
                    placeholder='Email'
                    onChange={handleChangeEmail}
                    value={email}
                >
                </input>
                
                <button type="submit">Enviar</button>

            </form>
            {(handleSubmit && nombre.length >= 5) 
                ? <p>Gracias {nombre}, te contactaremos cuando antes vía mail</p>
                : <p style={{ color: 'red'}}>{error}</p>}
        </section>
    )
}