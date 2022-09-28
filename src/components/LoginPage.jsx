import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserLoggedIn"
import { Button, Alert, Form } from "react-bootstrap"
import fetchData from "../utils/api"

const LoginPage = () => {
    const [successfulLogin, setSuccessfulLogin] = useState(true)
    const [showAlert, setShowAlert] = useState("");
    const [currentUsername, setCurrentUsername] = useState("")
    const {user, setUser} = useContext(UserContext)

    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData({endpoint: `/users`, method: "get"})
        .then(({users}) => {
            let userExists = false
            users.forEach((user) => {
                if (user.username === currentUsername) {
                    setShowAlert("success")
                    userSignIn(user.username)
                    userExists = true
                }
            })
            if (!userExists) {
                throw new Error()
            }
        })
        .catch(() => {
            setShowAlert("failed")
        })
        
        setCurrentUsername("")
    }

    const userSignIn = () => {
        setUser(currentUsername)
    }

    return (
        <div className="container">
            <br />
            <br />
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" onChange={(e) => setCurrentUsername(e.target.value)} placeholder="Enter username" 
                value={currentUsername} />
            </Form.Group>
    
          <Button variant="primary" type="Login">
            Login
          </Button>
        </Form>
        {showAlert === "" ? 
            ""
        : showAlert === "failed" ?    
        <Alert variant="danger" onClick={((e) => {
            e.preventDefault()
            setShowAlert("")
        })}>
        Username not found
        <Alert.Link href="/login">Try again</Alert.Link>
      </Alert>
        :
        <Alert variant="info" onClick={((e) => {
            e.preventDefault()
            setShowAlert("")
        })} dismissable="true">
        Login succeeded
      </Alert>
        }
        </div>
    )
}

export default LoginPage