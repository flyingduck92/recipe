// import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import RecipePage from './pages/RecipePage.jsx'
import ErrorPage from './pages/ErrorPage'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/recipe/:id' element={<RecipePage />}>
        <Route path='/recipe/:id/ingredients' element={<Ingredients />} />
        <Route path='/recipe/:id/instructions' element={<Instructions />} />
      </Route>
    </Route>
  )
)

const rootEl = document.getElementById('root')
ReactDOM.createRoot(rootEl).render(<RouterProvider router={router} />)
