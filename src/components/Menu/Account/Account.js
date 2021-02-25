import styles from './Account.module.scss'
import Image from 'next/image'
import Avatar from './Avatar'
import User from './User'
import Options from './Options'

const Account = () => {
  return (
    <div className={styles.account}>
      <div className={styles.avatar}>
        <Avatar />
      </div>
      <div className={styles.user}>
        <User />
      </div>
      <div className={styles.options}>
        <Options />
      </div>
    </div>
  )
}

export default Account
