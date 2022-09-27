import { Col, Card } from "react-bootstrap"

const ArticleCard = ({article}) => {
    return (
        <Col>
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
}

export default ArticleCard