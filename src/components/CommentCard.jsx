import { Col, Card, Button} from "react-bootstrap"
import { UserContext } from "../contexts/UserLoggedIn"
import { useContext, useState } from "react"
import fetchData from "../utils/api"

const CommentCard = ({comment, setCommentDeleted}) => {
    const {user} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)
    
    const handleClick = () => {
        setIsLoading(true)
        fetchData({endpoint: `comments/${comment.comment_id}`, method: "delete"})
        .then((res) => {
            if (res === 204) {
                setIsLoading(false)
                setCommentDeleted(true)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <Col>
            <Card>
            <Card.Body>
                <Card.Title>{comment.author}</Card.Title>
                <Card.Text>{comment.body}</Card.Text>
                <Card.Text>Votes : {comment.votes}</Card.Text>
                {
                    comment.author === user ? <Button onClick={handleClick} variant="danger">{isLoading ? "...Deleting" : "Delete"}</Button> : ""
                }
            </Card.Body>
            </Card>
        </Col>
    )
}

export default CommentCard