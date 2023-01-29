import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux';
import { store } from './redux/store';

import './styles/scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='pokemonList-react/:type?' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
)
