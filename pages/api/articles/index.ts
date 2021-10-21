import {articles} from './ArticleData'

export default function handler(req:any,res:any) {
  res.status(200).json(articles)
}
