import type {NextPage} from 'next'
import articlesStyle from '../styles/Articles.module.css'
import Article from './Article'

interface Props {
  articles?: ArticleProps[]
}

interface ArticleProps {
  id:any,
  title: string,
  userId?: any,
  body?: string,
}

const Articles: NextPage<Props> = ({articles}) => {
  return (
    <div className={articlesStyle.grid}>
        {articles && articles.map((article:ArticleProps) => (
<Article key={article.id} article={article}/>
          )
        )}
    </div>
  )
}

export default Articles
