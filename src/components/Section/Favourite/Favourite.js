import React from 'react'
import { connect } from 'react-redux'
import Title from '../../General/Title'
import CourseCard from '../Courses/CourseCard'
import sections from '../Section.module.scss'

const Favourite = ({favouriteCourse}) => {
  return (
    <div className={sections.section}>
      <Title question={'Favourite'}/>
      <CourseCard courses={favouriteCourse} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favouriteCourse: state.courses.map(course => {
      if(course.save){return course}
    })
  }
}
export default connect(mapStateToProps)(Favourite)
