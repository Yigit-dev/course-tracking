import styles from './Menu.module.scss'
import Account from "./Account/Account"
import Brand from "./Brand/Brand"
import Navigation from "./Navigation/Navigation"

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Brand />
      <Navigation />
      <Account />
    </div>
  )
}

export default Menu
