import { Button, Form } from "react-bootstrap"
import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserLoggedIn"
import fetchData from "../utils/api"

const AddComment = ({articleId, setCommentAdded}) => {
    const {user} = useContext(UserContext)
    const [commentBody, setCommentBody] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (user !== "") {
            fetchData({endpoint: `/articles/${articleId}/comments`, method: "post", data: {username: user, body: commentBody}})
            .then((res) => {
                setCommentBody("")
                setCommentAdded(true)
            })
            .catch((err) => {
                console.err(err)
            })
        }
    }

    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control value={commentBody} type="text" placeholder="Enter comment" onChange={(e) => setCommentBody(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={user === ""}>{user === "" ? "Sign in to leave comment" : "Add comment"}</Button>
    </Form>
    )
}

export default AddComment