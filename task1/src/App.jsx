import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

const App = () => (
  <div className="page">
    <BrowserRouter>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<Users />} /> {/* Обратите внимание на "/*" */}
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
