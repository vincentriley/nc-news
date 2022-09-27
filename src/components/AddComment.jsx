import { Button, Form } from "react-bootstrap"

const AddComment = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter comment" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add comment
      </Button>
    </Form>
    )
}

export default AddComment