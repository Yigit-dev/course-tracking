import Title from '../../General/Title'
import styles from './Home.module.scss'
import sections from '../Section.module.scss'
import LearningPath from './LearningPath/LearningPath'
import Slider from './Slider/Slider'
import React, {useState} from 'react';

const Home = () => {
  
  const [title,setTitle] = useState('Hi Yiğit,')
  const [question,setQuestion] = useState('What will you learn today?')
  
  return (
    <div className={sections.section}>
      <Title title={title} question={question}/>
      <Slider />
      <LearningPath />
    </div>
  )
}

export default Home
