import type {NextPage}
from 'next'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav : NextPage = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
