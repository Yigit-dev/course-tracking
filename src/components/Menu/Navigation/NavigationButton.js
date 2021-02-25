import styles from './Navigation.module.scss'

const NavigationButton = ({children}) => {
  return (
   <button className={styles.button}>{children}</button>
  )
}



export default NavigationButton
