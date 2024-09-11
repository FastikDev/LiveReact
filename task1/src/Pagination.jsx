import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, goPrev, goNext }) => {
  const maxPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={currentPage === 1}>
        {currentPage === 1 ? '' : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={currentPage === maxPages}>
        {currentPage === maxPages ? '' : '→'}
      </button>
    </div>
  );
};

export default Pagination;
