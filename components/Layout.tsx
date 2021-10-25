import type {NextPage} from 'next'
import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'

const Layout:NextPage = ({children}) => {
  return (
      <>
      <Meta/>
      <Nav/>
        <div className={styles.container}>
          <main className={styles.main}>
      <Header/>
        {children}
          </main>
        </div>
      </>
  )
}

export default Layout
