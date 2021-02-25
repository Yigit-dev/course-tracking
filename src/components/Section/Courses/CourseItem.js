import Image from 'next/image'
import {Heart, ShapeStar, ShapeStarFill} from '../../icons/index'
import { connect } from 'react-redux'
import { favouriteCourse,deleteFavouriteCourse } from '../../../actions/courses'
import Link from 'next/link'
import slug from 'slug'

const CourseItem = ({styles,course,dispatch}) => {

  const favourite = () => {
    course.save = !course.save
    if(course.save === true) {
      dispatch(favouriteCourse(course,course.save))      
    } else{
      dispatch(deleteFavouriteCourse(course.id))
    }    
  }

  return (
    
    <a>
      <li className={styles.card}>
        <Link href="/courses/[slug]" as={`/courses/${slug(course.title)}-${course.id}`}>
        <div className={styles.cardImage}>
          <Image src={course.image_240x135} layout="fill" />
        </div>
        </Link>
        <div className={styles.cardInformation}>
          <div className={styles.cardBody}>
            <button onClick={() => favourite()} className={styles.favourite}>
             {course.save ? <ShapeStarFill /> : <ShapeStar />}
            </button>
            <div className={styles.title}>{course.title}</div>
            <div className={styles.paragraph}>{course.headline}</div>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.avatar}>
                <img src={course.visible_instructors[0].image_50x50} alt="" />
            </div>
            <div className={styles.people}>
                {course.visible_instructors[0].display_name}
                <div className={styles.time}>2 h ago</div>
            </div>
            <div className={styles.price}>
             {course.is_paid ? <h3>{course.price}</h3> : <h2 className={styles.freePrice}>Free!</h2>}
            </div>
          </div>
        </div>
      </li>
    </a>
  )
}



export default connect()(CourseItem)
