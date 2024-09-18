import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import User from './User';

const Users = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="github">Github</Link>
        </li>
        <li className="navigation__item">
          <Link to="facebook">Facebook</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":userId" element={<User />} />
        <Route index element={<span>Select a user please</span>} />
      </Routes>
    </div>
  );
};

export default Users;
