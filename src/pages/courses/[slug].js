import Aside from "../../components/Aside/Aside"
import Layout from "../../components/Layout/Layout"
import {requestOptions} from '../../api/configApi'
import unfetch from "isomorphic-unfetch"
import slug from 'slug'
import Title from '../../components/General/Title'
import sections from '../../components/Section/Section.module.scss'


const CourseDetail = ({course}) => {
  return (
  <Layout>
    <div className={sections.section}>
    <Title question="Course Details"/>
      <h2>{course.id}</h2>
      <h3>{course.title}</h3>
      <h3>{course.headline}</h3>
      <h3>{course.price}</h3>
    </div>
    <Aside />
  </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch(`${requestOptions.url}courses`, requestOptions)
  const courses = await data.json()

  return {
    paths: courses.results.map(course => {
      return { params: {slug: `${slug(course.title)}-${course.id}`} }
    }),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const id = params.slug.split('-').slice(-1)[0]
  const data = await unfetch(`${requestOptions.url}courses/${id}`, requestOptions)
  const course = await data.json()
  return {
    props: {
      course
    }
  }
}

export default CourseDetail