import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { route } from './routes/routes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import './assets/css/style.css'

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [location.pathname]);
  return (
    <div>
      <Routes>
        {
          route.map((item) => <Route key={item.id} path={item.path} element={item.component} />)
        }
      </Routes>
    </div>
  )
}

export default App
