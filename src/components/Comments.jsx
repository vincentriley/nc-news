import { useEffect, useState } from "react"
import fetchData from "../utils/api"
import CommentCard from "./CommentCard"
import { Spinner } from "react-bootstrap"

const Comments = ({articleId}) => {
    const [comments, setComments] = useState([])
    const [commentDeleted, setCommentDeleted] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchData({endpoint: `/articles/${articleId}/comments`})
        .then(({comments}) => {
            comments.sort((a,b) => {
                return b.comment_id - a.comment_id
            })
            setComments(comments)
            setCommentDeleted(false)
            setIsLoading(false)
        })
        .catch(() => {
            setIsError(true)
        })
    }, [commentDeleted, articleId])

    if (isLoading) return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> 
    if (isError) return <p>Something went wrong loading the comments for this article...</p>

    return (
        <div>
            <h1>Comments</h1>
            {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} setCommentDeleted={setCommentDeleted} />
        })}
        </div>
    )
}

export default Comments