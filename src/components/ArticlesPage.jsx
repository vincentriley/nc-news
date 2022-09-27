import fetchData from "../utils/api"
import { useState, useEffect } from "react"
import { Card, Col } from "react-bootstrap"
import CategoryDropdown from "./CategoryDropdown"
import ArticleCard from "./ArticleCard"

const ArticlesPage = () => {
    const [articles, setArticles] = useState([])
    const [selectedTopic, setSelectedTopic] = useState("All")
    
    useEffect(() => {
        fetchData({endpoint: "/articles"})
        .then(({articles}) => {
            setArticles(articles)
        })
    },[])
    
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