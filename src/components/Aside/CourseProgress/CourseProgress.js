import {RightArrow, Codeigniter, Firebase, Principle, Sketch} from '../../icons/index'
import styles from './CourseProgress.module.scss'

const CourseProgress = () => {
  return (
    <div className={styles.CourseProgress}>
      <h3>Course In Progress</h3>

      <div className={styles.Progress}>
        <div className={styles.course} style={{backgroundColor: '#FFA2C0'}} >
          <div className={styles.brand}>
            <Codeigniter />
          </div>
        </div>
        <div className={styles.info}>
        {/* // TODO: Yazıların .... */}
          <h4>Build Your First Application</h4>
          <p>Codeigniter</p>
        </div>
        <div className={styles.icon}>
          <RightArrow />
        </div>
      </div>

      <div className={styles.Progress}>
        <div className={styles.course} style={{backgroundColor: '#FFCE73'}} >
          <div className={styles.brand}>
            <Sketch />
          </div>
        </div>
        <div className={styles.info}>
          <h4>Build something beautiful</h4>
          <p>Sketch</p>
        </div>
        <div className={styles.icon}>
          <RightArrow />
        </div>
      </div>

      <div className={styles.Progress}>
        <div className={styles.course} style={{backgroundColor: '#A0D7E7'}} >
          <div className={styles.brand}>
            <Firebase />
          </div>
        </div>
        <div className={styles.info}>
          <h4>Firebase on Android: Cloud Fire</h4>
          <p>Firebase</p>
        </div>
        <div className={styles.icon}>
          <RightArrow />
        </div>
      </div>

      <div className={styles.Progress}>
        <div className={styles.course} style={{backgroundColor: '#B2E2D7'}} >
          <div className={styles.brand}>
            <Principle />
          </div>
        </div>
        <div className={styles.info}>
          <h4>Creating Custom Animations</h4>
          <p>Principle</p>
        </div>
        <div className={styles.icon}>
          <RightArrow />
        </div>
      </div>
    </div>
    
  )
}

export default CourseProgress
