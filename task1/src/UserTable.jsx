import React, { useState } from 'react';
import UsersList from './UsersList';
import Pagination from './Pagination';

const UserTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalItems = users.length;
  const maxPages = Math.ceil(totalItems / itemsPerPage);

  const goPrev = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const goNext = () => {
    setCurrentPage(prevPage => (prevPage < maxPages ? prevPage + 1 : maxPages));
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        goPrev={goPrev}
        goNext={goNext}
      />
      <UsersList users={users} currentPage={currentPage} itemsPerPage={itemsPerPage} />
    </>
  );
};

export default UserTable;
