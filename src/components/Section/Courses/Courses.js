import React, { useState } from 'react';
import sections from '../Section.module.scss'
import CourseCard from './CourseCard'
import Title from '../../General/Title'
import Pagination from '../../General/Pagination'

const Courses = ({courses}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = courses.results.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={sections.section}>
      <Title title={'Hi Yiğit'} question={'Courses listed for you'}/>
      <CourseCard courses={currentPosts}/>
      { courses.results.length > 7 &&
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={courses.results.length}
          paginate={paginate}
        /> 
      }
    </div> 
  )

  
}


export default Courses