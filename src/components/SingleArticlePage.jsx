import { useEffect, useState } from "react"
import fetchData from "../utils/api"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"


const SingleArticlePage = () => {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetchData({endpoint: `/articles/${article_id}`})
        .then(({article}) => {
            setArticle(article)
        })
    })

    const handleBackToArticlesClick = () => {
        navigate("/articles")
    }

    const handleBackToTopicClick = () => {
        navigate(`/topics/${article.topic}`)
    }

    return (
        <div>
            <Button onClick={handleBackToArticlesClick}>Back To All Articles</Button>
            <Button variant="success" onClick={handleBackToTopicClick}>Back To {article.topic}</Button>
            <br />
            <h1>{article.title}</h1>
            <br />
            <h2>Written by {article.author}</h2>
            <br />
            <p>{article.body}</p>
        </div>
    )
}

export default SingleArticlePage