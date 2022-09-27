import { Col, Card} from "react-bootstrap"

const CommentCard = ({comment}) => {
    return (
        <Col>
            <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{comment.author}</Card.Title>
                <Card.Text>{comment.body}</Card.Text>
                <Card.Text>Votes : {comment.votes}</Card.Text>
                
            </Card.Body>

            </Card>
        </Col>
    )
}

export default CommentCard