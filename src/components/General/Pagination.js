import React, { useState } from 'react';
import Link from 'next/link'
import styles from './Pagination.module.scss'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.Pagination}>
      {pageNumbers.map(number => (
        <li key={number} className={styles.pageItem}>
          {/* <Link href='' as={`/courses/${number}`} className='page-link'> */}
          <Link href='' className={styles.pageLink}>
            <a  onClick={() => paginate(number)}>
            {number}
            </a>
          </Link>
        </li>
      ))}
    </ul>    
  );
};



export default Pagination;
