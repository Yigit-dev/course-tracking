import styles from './Aside.module.scss'
import CourseProgress from './CourseProgress/CourseProgress'
import LearningPoint from './LearningPoint/LearningPoint'
import Searcher from './Searcher/Searcher'

const Aside = () => {
  return (
    <div className={styles.Aside}>
      <Searcher />
      <CourseProgress />
      <LearningPoint />
    </div>
  )
}

export default Aside
