import styles from './Brand.module.scss'
import Link from 'next/link'

const Brand = () => {
  return (
    <div>      
      <Link href="/"><a><h1 className={styles.brand}>Courselr<span>.</span></h1></a></Link>
    </div>
  )
}

export default Brand
