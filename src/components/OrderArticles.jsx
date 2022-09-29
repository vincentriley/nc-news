import { Dropdown, Button, ButtonGroup } from "react-bootstrap"
import { useState } from "react"

const OrderArticles = ({ setSortAndOrder}) => {
    const [sortBy, setSortBy] = useState("")
    const [orderBy, setOrderBy] = useState("")
    const [sortByDropdown, setSortByDropdown] = useState("Sort By")
    const [orderByDropdown, setOrderByDropdown] = useState("Order By")

    const lookupTable = {
        created_at : "Date",
        comment_count : "Comments",
        votes : "Votes",
        asc : "Ascending",
        desc : "Descending"
    }
    const handleSortByClick = (e) => {
        setSortBy(e.target.id)
        setSortByDropdown(lookupTable[e.target.id])
    }

    const handleOrderByClick = (e) => {
        setOrderBy(e.target.id)
        setOrderByDropdown(lookupTable[e.target.id])
    }

    const handleSubmit = () => {
        setSortAndOrder({
            sortBy: sortBy,
            orderBy: orderBy
        })
    }

    return (
        <>
            <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
            {sortByDropdown}
          </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item  onClick={handleSortByClick} id="created_at">Date</Dropdown.Item>
                <Dropdown.Item onClick={handleSortByClick} id="comment_count">Comment Count</Dropdown.Item>
                <Dropdown.Item onClick={handleSortByClick} id="votes">Votes</Dropdown.Item>
            </Dropdown.Menu>
                
            </Dropdown>
            <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="info" id="dropdown-basic">{orderByDropdown}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleOrderByClick} id="asc" >Ascending</Dropdown.Item>
                <Dropdown.Item onClick={handleOrderByClick} id="desc" >Descending</Dropdown.Item>
            </Dropdown.Menu>
            {
                sortBy !== "" && orderBy !== "" ?
                <Button as={ButtonGroup} onClick={handleSubmit} variant="info" >Go</Button> : ""
            }
            
            </Dropdown>
        </>
    )
}

export default OrderArticles