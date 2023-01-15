import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import './styles/scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='pokemonList-react/:type?' element={<App />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
)
