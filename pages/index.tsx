import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Articles from '../components/Articles'
import {server} from '../config/index'

interface Props {
  articles?: any[]
}

const Home: NextPage<Props> = ({articles}) => {

  return (
    <>
        <Articles articles={articles}/>
    </>
  )
}

export default Home

// fetching StaticProps from API requires absolute URL so we need to know if in 'dev' or on 'production' server
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

