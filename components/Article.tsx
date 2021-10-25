import type {NextPage} from 'next'
import Link from 'next/link'
import articleStyles from '../styles/Articles.module.css'
import IArticle from '../pages/api/articles/IArticleData'

interface Props {
  article: IArticle,
  // article: ArticleProps
}

// interface ArticleProps {
//   id:any,
//   title: string,
//   userId?: any,
//   body?:string,
// }

const Article: NextPage<Props> = ({article}) => (
    <Link href="article/[id]" as={`article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title}</h3>
        <h6>{article.excerpt}</h6>
        <p>{article.body}</p>   
      </a>
    </Link>
  )

export default Article
