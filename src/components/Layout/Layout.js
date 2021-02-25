import Head from 'next/head'
import Menu from '../Menu/Menu'


const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Yiğit</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <main>
      <Menu />
        {children}
      </main>
      <footer>
        software by yigit
      </footer>
    </div>
  )
}

export default Layout
