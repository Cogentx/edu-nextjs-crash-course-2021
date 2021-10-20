import type {GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage} from 'next'
// import type {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next'
import Link from 'next/link'
// import {useRouter} from 'next/router'

interface Props {
  article: ArticleProps,
}

interface ArticleProps {
    id: any,
    title: string,
    userId?: any,
    body?: string,
}

const ArticlePage: NextPage<Props> = ({article}) => {

  // const router = useRouter()
  // const {id} = router.query

  return (
    <>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br />
    <Link href="/">⬅️ Go Back</Link>
    </>
  )
}

export default ArticlePage

// Much faster and can be used in Static Website
export const getStaticProps:GetStaticProps = async (context:GetStaticPropsContext) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`)
  const article = await res.json()
  return {
    props: {
      article
    }
  }
}

// Needed with getStaticProps
export const getStaticPaths:GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  // Get list of Article IDs
  const ids = articles.map(({id}:ArticleProps) => id )
  // Turn into Paths
  const paths = ids.map((id:any) => (
    {params: {id:id.toString()}}
  ))

  return {
    paths,
    fallback: false, // returns 404 page if not found
  }
}

// Dynamic on each Server fetch
// export const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()
//   return {
//     props: {
//       article
//     }
//   }
// }
