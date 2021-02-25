import Notification from '../../General/Notification'
import {Search} from '../../icons/index'
import styles from './Searcher.module.scss'

const Searcher = () => {
  return (
    <div className={styles.Searcher}>
      <form className={styles.Form}>
        <div className={styles.searchIcon}>
          <Search />
        </div>
        <input type="text" placeholder="Start typing to search" />
      </form>
      <div className={styles.notify}>
        <Notification />
      </div>
    </div>
  )
}

export default Searcher
