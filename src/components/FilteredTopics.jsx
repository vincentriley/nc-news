import { useParams } from "react-router-dom"
import { useEffect } from "react"
import fetchData from "../utils/api"
import { useState } from "react"
import { Col, Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

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
                    <Col key={article.article_id}>
                    <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>Author : {article.author}</Card.Text>
                        <Card.Text>Topic : {article.topic}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Card.Text>Votes : {article.votes}</Card.Text>
                    <Card.Text>Comments : {article.comment_count}</Card.Text>
                    </Card.Footer>
                    </Card>
                </Col>  
                )
            })}
        </div>
        )
}

export default FilteredTopics