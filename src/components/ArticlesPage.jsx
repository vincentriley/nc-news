import fetchData from "../utils/api"
import { useState, useEffect } from "react"
import { Card, Col } from "react-bootstrap"
import CategoryDropdown from "./CategoryDropdown"
import FilteredTopics from "./FilteredTopics"

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

export default ArticlesPage