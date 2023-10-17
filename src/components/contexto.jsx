import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';

const api = 'https://jsonplaceholder.typicode.com/users';

export const Contexto = createContext()

const initialState = {
    tema: 'lightblue',
    data: [],
    favs: JSON.parse(localStorage.getItem('favs')) || []
}

function reducer(state, action) {
    if (action.type === 'CHANGE') {
        return {
            ...state, tema: action.payload === state.tema ? "lightblue" : "darkblue"
        }
    }
    if (action.type === 'DATA') {
        return {
            ...state, data: action.payload
        }
    }
    if (action.type === 'FAVS') {
        return {
            ...state, favs: [...state.favs, action.payload] 
        }
    }
}

export function ContextoProvider({ children }){
    
    const [estado, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        axios(api)
        .then((res) => dispatch({ type: 'DATA', payload: res.data}))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(estado.favs))
    }, [estado.favs])


    return (<Contexto.Provider value={{ estado, dispatch }}>
                {children}
            </Contexto.Provider>)
}

export const useContexto = () => useContext(Contexto)