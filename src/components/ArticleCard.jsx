import { Col, Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ArticleCard = ({article}) => {
    const navigate = useNavigate()
    const handleClick = (e) => {
        navigate(`/articles/${e.target.value}`)
    }
    return (
        <Col>
            <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>Author : {article.author}</Card.Text>
                <Card.Text>Topic : {article.topic}</Card.Text>
                <Button value={article.article_id} onClick={handleClick}>View Article</Button>
            </Card.Body>
            <Card.Footer>
            <Card.Text>Votes : {article.votes}</Card.Text>
            <Card.Text>Comments : {article.comment_count}</Card.Text>
            </Card.Footer>
            </Card>
        </Col>  
    )
}

export default ArticleCard