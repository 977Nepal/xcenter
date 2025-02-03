import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import Routers from "./components/routes/Routes";
import { store } from "./Store";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContex";
import ShowSnackBar from "./shared/message/snackbar"


createRoot(document.getElementById('root')).render(
    <App />
)
