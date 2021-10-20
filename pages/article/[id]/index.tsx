import type {NextPage} from 'next'
import {useRouter } from 'next/router'

interface Props {
  article: ArticleProps,
}

interface ArticleProps {
    id: any,
    title: string,
    userId?: any,
    body?: string,
}

const ArticlePage: NextPage<Props> = () => {

  const router = useRouter()
  const {id} = router.query

  return (
    <div>This is article {id}</div>
  )
}

export default ArticlePage
