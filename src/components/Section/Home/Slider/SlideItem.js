import styles from './Slider.module.scss'
import Image from 'next/image'

const SlideItem = () => {
  return (
    <div className={styles.slideItem}>
      <Image src="/slider.png" width={359} height={359} quality={100}/>
      <div className={styles.sliderBody}>
        <h3>Artificial Intelligence for Marketing</h3>
        <p>Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations.</p>
        <button>Learn Now !</button>        
      </div>
    </div>
  )
}

export default SlideItem
