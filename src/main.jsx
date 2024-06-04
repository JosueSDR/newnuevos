import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import store from './app/store.js'; // Ajusta la ruta según sea necesario

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <App />
 </Provider>,
)
