import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextoProvider } from './components/contexto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextoProvider>
      <App />
    </ContextoProvider>
)
