import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';

const api = 'https://jsonplaceholder.typicode.com/users';

export const Contexto = createContext()

const favsFromStorage = localStorage.getItem('favs');
const initialFavs = favsFromStorage ? JSON.parse(favsFromStorage) : [];
const initialState = {
    tema: 'lightblue',
    data: [],
    favs: initialFavs
};


function reducer(state, action) {
    if (action.type === 'CHANGE') {
        return {
            ...state, tema: action.payload
        };
    }
    if (action.type === 'DATA') {
        return {
            ...state, data: action.payload
        };
    }
    if (action.type === 'FAVS') {
        return {
            ...state, favs: [...state.favs, action.payload]
        };
    }
    if (action.type === 'REMOVE_FAVS') {
        return {
            ...state, favs: state.favs.filter(fav => fav.id !== action.payload.id)
        };
    }
}

export function ContextoProvider({ children }) {

    const [estado, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios(api)
            .then((res) => dispatch({ type: 'DATA', payload: res.data }))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(estado.favs))
    }, [estado.favs])


    return (<Contexto.Provider value={{ estado, dispatch }}>
        {children}
    </Contexto.Provider>)
}

export const useContexto = () => useContext(Contexto)