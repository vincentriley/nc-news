import { useEffect, useState } from "react"
import fetchData from "../utils/api"
import { useParams, useNavigate } from "react-router-dom"
import { Button, Spinner } from "react-bootstrap"
import Votes from "./Votes"
import Comments from "./Comments"
import AddComment from "./AddComment"

const SingleArticlePage = () => {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [commentAdded, setCommentAdded] = useState(false)
    
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)
        fetchData({endpoint: `/articles/${article_id}`})
        .then(({article}) => {
            setArticle(article)
            setIsLoading(false)
            setIsError(false)
            setCommentAdded(false)
        })
        .catch((err) => {
            console.error(err);
            setIsLoading(false);
            setIsError(true);
        })
    },[article_id, commentAdded])

    const handleBackToArticlesClick = () => {
        navigate("/articles")
    }

    const handleBackToTopicClick = () => {
        navigate(`/topics/${article.topic}`)
    }

    if (isLoading) return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> 
    if (isError) return <p>Something went wrong...</p>

    return (
        <div>
            <Button onClick={handleBackToArticlesClick}>Back To All Articles</Button>
            <Button variant="success" onClick={handleBackToTopicClick}>Back To {article.topic}</Button>
            <br />
            <h1>{article.title}</h1>
            <br />
            <h2>Written by {article.author}</h2>
            <Votes articleId={article_id} />
            <br />
            <p>{article.body}</p>
            <h2>Comments</h2>
            <AddComment articleId={article_id} setCommentAdded={setCommentAdded} />
            <Comments articleId={article_id} />
        </div>
    )
}

export default SingleArticlePage