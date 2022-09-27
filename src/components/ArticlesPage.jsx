import fetchData from "../utils/api"
import { useState, useEffect } from "react"
import { Card, Col, Spinner } from "react-bootstrap"
import CategoryDropdown from "./CategoryDropdown"
import ArticleCard from "./ArticleCard"

const ArticlesPage = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        setIsLoading(true)
        fetchData({endpoint: "/articles"})
        .then(({articles}) => {
            setArticles(articles)
            setIsLoading(false)
            setIsError(false)
        })
        .catch((err) => {
            console.error(err);
            setIsLoading(false);
            setIsError(true);
        })
    },[])

    if (isLoading) return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> 
    if (isError) return <p>Something went wrong...</p>
    
    return (
    <div className="container">
    <h1>All Articles</h1>
    <CategoryDropdown />
        {articles.map((article) => {
            return (
                <ArticleCard key={article.article_id} article={article} />
            )
        })}
    </div>
        )
}

export default ArticlesPage