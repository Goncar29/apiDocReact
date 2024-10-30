import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
// import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { Dentista } from './components/Dentista';
import { Favs } from './components/Favs';
import { Home } from './components/Home';
import { PageNotFound } from "./components/404";

function App() {
    return (
        <>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dentista/:id" element={<Dentista />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/favs" element={<Favs />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>

                <Footer />
            </HashRouter>
        </>
    )
}

export default App
