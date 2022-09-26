import {Nav} from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <Nav
        activeKey="/home"
        onSelect={(selectedKey) => {
            navigate(selectedKey)
        }}
      >
        <Nav.Item>
          <Nav.Link eventKey="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/articles">Articles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/users">Users</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default NavBar   