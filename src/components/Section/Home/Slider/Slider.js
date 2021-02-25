import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'
import SlideItem from './SlideItem';
import styles from './Slider.module.scss'

SwiperCore.use([Pagination])

const Slider = () => {
  
  return (
    <div className={styles.slider}>
      <Swiper className={styles.sliderContainer} id="controller" pagination={{dynamicBullets: true}}>
        <SwiperSlide>
            <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
            <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
            <SlideItem />
        </SwiperSlide>    
      </Swiper>
    </div>
  )
}

export default Slider
