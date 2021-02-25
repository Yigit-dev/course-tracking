import LineChart from '../../Chart/LineChart'
import styles from './LearningPoint.module.scss'

const LearningPoint = () => {
  return (
    <div className={styles.LearningPoint}>
      <h3>Learning Point</h3>
      <div className={styles.chart}>
        <LineChart />
      </div>
    </div>
  )
}

export default LearningPoint