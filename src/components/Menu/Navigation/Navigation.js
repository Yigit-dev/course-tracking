import styles from './Navigation.module.scss'
import ActiveLink from './ActiveLink'
import { Achievements, Certificate, Courses, Home, Heart, Setting, Notepad } from '../../icons/'
import NavigationButton from './NavigationButton'

const Navigation = () => {
  return (
    //passHref ?
    <nav className={styles.nav}>
      <ActiveLink href="/" activeClassName="active" >
        <a><NavigationButton><Home />Home</NavigationButton></a>
      </ActiveLink>
      <ActiveLink href="/courses" activeClassName="active">
        <a><NavigationButton><Courses />Courses</NavigationButton></a>
      </ActiveLink>
      <ActiveLink href="/favourite" activeClassName="active">
        <a><NavigationButton><Heart />Favourite</NavigationButton></a>
      </ActiveLink>
      <ActiveLink href="/test" activeClassName="active">
        <a><NavigationButton><Notepad />Test</NavigationButton></a>
      </ActiveLink>
      <ActiveLink href="/achivements" activeClassName="active">
        <a><NavigationButton><Achievements />Achievements</NavigationButton></a>
      </ActiveLink>
      <ActiveLink href="/certificate" activeClassName="active">
        <a><NavigationButton><Certificate />Certificate</NavigationButton></a>
      </ActiveLink>
      <ActiveLink href="/settings" activeClassName="active">
        <a><NavigationButton><Setting />Settings</NavigationButton></a>
      </ActiveLink> 
    </nav>
  )
}

export default Navigation
