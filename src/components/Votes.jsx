import { useEffect, useState } from "react"
import fetchData from "../utils/api"
import { Button } from "react-bootstrap"

const Votes = ({articleId}) => {
    const [numVotes, setNumVotes] = useState(0)

    useEffect(() => {
        fetchData({endpoint: `/articles/${articleId}`})
        .then(({article}) => {
            setNumVotes(article.votes)
        })
    }, [articleId])

    const handleClick = () => {
        setNumVotes((curr) => curr + 1)
        fetchData({endpoint: `/articles/${articleId}`, method: "patch", data: {inc_votes: 1}})
        .then(({article}) => {
            setNumVotes(article.votes)
        })
        .catch((err) => {
            setNumVotes((curr) => curr - 1)
        })
    }

    
    return (
        <div>
            <h1>Votes : {numVotes}</h1>
                <Button onClick={handleClick}>Add Vote</Button>
            </div>
        )
}

export default Votes