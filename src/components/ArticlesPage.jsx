import fetchData from "../utils/api"
import { useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import CategoryDropdown from "./CategoryDropdown"
import ArticleCard from "./ArticleCard"
import OrderArticles from "./OrderArticles"

const ArticlesPage = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [sortAndOrder, setSortAndOrder] = useState({sortBy: "", orderBy: ""})
    
    useEffect(() => {
        let sortQuery = sortAndOrder.sortBy === "" ? "" : `?sort_by=${sortAndOrder.sortBy}`
        let orderQuery = sortAndOrder.orderBy === "" ? "" : `&order=${sortAndOrder.orderBy}`
        setIsLoading(true)
        fetchData({endpoint: `/articles${sortQuery}${orderQuery}`})
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
    },[sortAndOrder])

    if (isLoading) return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> 
    if (isError) return <p>Something went wrong...</p>
    
    return (
    <div className="container">
    <h1>All Articles</h1>
    <CategoryDropdown />
    <br/>
    <OrderArticles setSortAndOrder={setSortAndOrder} />
    
        {articles.map((article) => {
            return (
                <ArticleCard key={article.article_id} article={article} />
            )
        })}
    </div>
        )
}

export default ArticlesPage