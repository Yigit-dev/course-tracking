import styles from './LearningPath.module.scss'
import {ShapeStar, Menu} from '../../../icons'
import Avatars from './Avatars'

const LearningPath = () => {
  return (
    <div className={styles.LearningPath}>
      <h1>Your learning path</h1>
      <div className={styles.box}>
        <div className={styles.courseBox}>
          <div className={styles.courseBoxHead}>
            <h3>Sketch from A to Z</h3>
            <p>12 hours of video tutorials </p>
            <span>423 students</span>
          </div>
          <div className={styles.courseBoxFooter}>
            <div className={styles.avatars}>
              <Avatars />
             
              
            </div>
            <div className={styles.icons}>
              <div className={styles.shapeStarIcon}>
                <ShapeStar />
              </div>
              <div className={styles.menuIcon}>
                <Menu />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.courseBox}>
          <div className={styles.courseBoxHead}>
            <h3>Sketch from A to Z</h3>
            <p>12 hours of video tutorials </p>
            <span>423 students</span>
          </div>
          <div className={styles.courseBoxFooter}>
            <div className={styles.avatars}>
              <Avatars />
             
              
            </div>
            <div className={styles.icons}>
              <div className={styles.shapeStarIcon}>
                <ShapeStar />
              </div>
              <div className={styles.menuIcon}>
                <Menu />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.courseBox}>
          <div className={styles.courseBoxHead}>
            <h3>Sketch from A to Z</h3>
            <p>12 hours of video tutorials </p>
            <span>423 students</span>
          </div>
          <div className={styles.courseBoxFooter}>
            <div className={styles.avatars}>
              <Avatars />
             
              
            </div>
            <div className={styles.icons}>
              <div className={styles.shapeStarIcon}>
                <ShapeStar />
              </div>
              <div className={styles.menuIcon}>
                <Menu />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.courseBox}>
          <div className={styles.courseBoxHead}>
            <h3>Sketch from A to Z</h3>
            <p>12 hours of video tutorials </p>
            <span>423 students</span>
          </div>
          <div className={styles.courseBoxFooter}>
            <div className={styles.avatars}>
              <Avatars />
             
              
            </div>
            <div className={styles.icons}>
              <div className={styles.shapeStarIcon}>
                <ShapeStar />
              </div>
              <div className={styles.menuIcon}>
                <Menu />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.courseBox}>
          <div className={styles.courseBoxHead}>
            <h3>Sketch from A to Z</h3>
            <p>12 hours of video tutorials </p>
            <span>423 students</span>
          </div>
          <div className={styles.courseBoxFooter}>
            <div className={styles.avatars}>
              <Avatars />
             
              
            </div>
            <div className={styles.icons}>
              <div className={styles.shapeStarIcon}>
                <ShapeStar />
              </div>
              <div className={styles.menuIcon}>
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LearningPath
