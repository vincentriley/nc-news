import { Dropdown } from "react-bootstrap"
import { useEffect, useState } from "react"
import fetchData from "../utils/api"
import { useNavigate } from "react-router-dom"

const CategoryDropdown = () => {
    const navigate = useNavigate()
    const [topics, setTopics] = useState([])
    const [selectedTopic, setSelectedTopic] = useState("")


    useEffect(() => {
        fetchData({endpoint: "/topics"})
        .then(({topics}) => {
          setTopics(topics)
        })
      },[])

      const handleClick = (e) => {
         setSelectedTopic(e.target.text)
         navigate(`/topics/${e.target.text}`)
      }

    return (
        <div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Browse by topic
          </Dropdown.Toggle>
          <Dropdown.Menu value={selectedTopic}>
                  {topics.map((topic) => {
                 return <Dropdown.Item onClick={handleClick} key={topic.slug}>{topic.slug}</Dropdown.Item>
             })}
          </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}

export default CategoryDropdown