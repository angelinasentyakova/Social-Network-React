import "./Paginator.css";
import React, { useState } from "react";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  };
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [PortionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (PortionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = PortionNumber * portionSize;
  return (
  <div className='pagination-container'>
    {PortionNumber > 1 && <button className='prev-button' onClick={() => { setPortionNumber(PortionNumber - 1)}}> Prev </button>}
    <ul className="users-pagination">
      {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        
        .map((p) => {
          return <li
            onClick={(e) => {
              onPageChange(p);
            }}
            className={currentPage === p ? "users-selected-page" : ""}
          >
            {p}
          </li>
        })
      }
</ul>
       {portionCount > PortionNumber  && <button className='next-button' onClick={() => { setPortionNumber(PortionNumber + 1)}}> Next </button>}
       </div>
      );
};

export default Paginator;
