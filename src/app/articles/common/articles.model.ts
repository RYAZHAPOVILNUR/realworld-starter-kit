export interface ArticlesModel {
  articles: ArticleModel[]
  articlesCount: number
}

export interface ArticleModel {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: AuthorModel
}

export interface AuthorModel {
  username: string
  bio: string
  image: string
  following: boolean
}