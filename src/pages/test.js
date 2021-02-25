import Aside from "../components/Aside/Aside"
import Layout from "../components/Layout/Layout"
import Test from "../components/Section/Test/Test"
import {requestOptions} from '../api/configApi'

const CategoryPage = () => {
  return <Layout>
    <Test/>
    <Aside />
  </Layout>
}


export default CategoryPage