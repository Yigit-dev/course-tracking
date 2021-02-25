import styles from './Title.module.scss'

const Title = ({title, question}) => {
  return (
    <div className={styles.Title}>
      <div className={styles.title}>{title}</div>
      <div className={styles.question}>{question}</div>
    </div>
  )
}

export default Title
