import styles from './CourseCard.module.scss'
import CourseItem from './CourseItem'

const CourseCard = ({courses}) => {
  return (
    <div className={styles.blogCards}>
      <ul>
        {
          courses.map(course => (
            <CourseItem key={course.id} course={course} styles={styles} />
          ))
        }          
      </ul>
    </div>
  )
}

export default CourseCard