import styles from './Notification.module.scss'
import { Bell } from '../icons/index'
const Notification = () => {
  return (
      <div className={styles.Bell}>
        <Bell />
        <div className={styles.count}>123</div>
      </div>
  )
}

export default Notification
