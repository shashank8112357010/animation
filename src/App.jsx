import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { route } from './routes/routes';
import LocomotiveScroll from 'locomotive-scroll';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import './App.css';
import './assets/css/style.css';

const App = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.1,
      class: 'is-reveal',
    });

    scroll.update();

    return () => {
      scroll.destroy();
    };
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Routes>
        {route.map((item) => (
          <Route key={item.id} path={item.path} element={item.component} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
