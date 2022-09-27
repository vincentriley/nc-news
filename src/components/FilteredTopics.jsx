import { useParams } from "react-router-dom"
import { useEffect } from "react"
import fetchData from "../utils/api"
import { useState } from "react"
import { Col, Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ArticleCard from "./ArticleCard"

const FilteredTopics = () => {
    const {topic_slug} = useParams()
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchData({endpoint: "/articles", params: {topic: topic_slug}})
        .then(({articles}) => {
            setArticles(articles)
        })
    },[])

    const handleClick = () => {
        navigate("/articles")
    }

    return (
        <div className="container">
            <h1>{topic_slug}</h1>
            <Button onClick={handleClick}>Back To All Articles</Button>
            {articles.map((article) => {
                return (
                    <ArticleCard  key={article.article_id} article={article} />
                )
            })}
        </div>
        )
}

export default FilteredTopics