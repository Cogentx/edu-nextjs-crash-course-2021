import type {NextPage} from 'next'
import headerStyles from '../styles/Header.module.css'

const Header : NextPage = () => {
  const x = 3;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> Newz
      </h1>
      <p className={headerStyles.description}>Keep up to date with latest WebDev Newz!</p>
    </div>
  )
}

export default Header
