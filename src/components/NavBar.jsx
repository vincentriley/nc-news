import {Nav} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../contexts/UserLoggedIn"

const NavBar = () => {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    return (
        <Nav
        activeKey="/home"
        onSelect={(selectedKey) => {
            navigate(selectedKey)
        }}
      >
        <Nav.Item>
          <Nav.Link eventKey="/">Articles</Nav.Link>
        </Nav.Item>
        {
          user === "" ?
          <Nav.Item>
          <Nav.Link eventKey="/login">Login</Nav.Link>
        </Nav.Item>
        :
        <Nav.Item>
        <Nav.Link eventKey="/users" >User: {user}</Nav.Link>
      </Nav.Item>
        }
        
        
      </Nav>
    )
}

export default NavBar   