import React from 'react';
import { Link, Routes, Route, useMatch, useResolvedPath } from 'react-router-dom';
import User from './User';

const Users = () => {
  const match = useResolvedPath('');

  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.pathname}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.pathname}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${match.pathname}/:userId`} element={<User />} />
        <Route path={match.pathname} element={<span>Select a user please</span>} />
      </Routes>
    </div>
  );
};

export default Users;
