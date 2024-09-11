import React from 'react';
import User from './User';

const UsersList = ({ users, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <ul className="users">
      {users.slice(startIndex, endIndex).map(user => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UsersList;
