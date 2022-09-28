import { useEffect, useState } from "react"
import fetchData from "../utils/api"
import CommentCard from "./CommentCard"

const Comments = ({articleId}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchData({endpoint: `/articles/${articleId}/comments`})
        .then(({comments}) => {
            comments.sort((a,b) => {
                return b.comment_id - a.comment_id
            })
            setComments(comments)
        })
    }, [])

    return (
        <div>
            <h1>test</h1>
            {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />
        })}
        </div>
    )
}

export default Comments