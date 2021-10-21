import { articles } from './ArticleData';
import IArticle from './IArticleData';

export default function handler({query: {id}}:any, res:any) {
  const filteredArticles = articles.filter((article:IArticle) => article.id === id)

  if (filteredArticles.length > 0) {
    res.status(200).json(filteredArticles[0])
  } else {
    res.status(404).json({
      message: `Article with the ID of ${id} is not found.`
    })
  }
}
