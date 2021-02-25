import Aside from "../components/Aside/Aside"
import Layout from "../components/Layout/Layout"
import Courses from "../components/Section/Courses/Courses"
import {requestOptions} from '../api/configApi'
import unfetch from "isomorphic-unfetch"
import { connect } from 'react-redux'

const CoursesPage = ({courses}) => {
  return <Layout>
    <Courses courses={courses} />
    <Aside />
  </Layout>
}

export async function getStaticProps() {

  const data = await unfetch(`${requestOptions.url}courses/`, requestOptions)
  const courses = await data.json()

  return {
    props: {
      courses
    }
  }

}

export default connect()(CoursesPage)