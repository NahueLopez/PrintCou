import { BrowserRouter as Router } from 'react-router-dom'; // O utiliza 'HashRouter' si prefieres el enrutamiento basado en hash
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router >
    <App />
  </Router>,
)
