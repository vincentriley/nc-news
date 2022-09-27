import { useParams } from "react-router-dom"
import { useEffect } from "react"
import fetchData from "../utils/api"
import { useState } from "react"
import { Col, Card, Button, Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ArticleCard from "./ArticleCard"

const FilteredTopics = () => {
    const {topic_slug} = useParams()
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)
        fetchData({endpoint: "/articles", params: {topic: topic_slug}})
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

    const handleClick = () => {
        navigate("/articles")
    }

    if (isLoading) return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> 
    if (isError) return <p>Something went wrong...</p>

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