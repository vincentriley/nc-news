import { useParams } from "react-router-dom"
import { useEffect } from "react"
import fetchData from "../utils/api"
import { useState } from "react"
import { Button, Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ArticleCard from "./ArticleCard"
import OrderArticles from "./OrderArticles"

const FilteredTopics = () => {
    const {topic_slug} = useParams()
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate()
    const [sortAndOrder, setSortAndOrder] = useState({sortBy: "", orderBy: ""})

    useEffect(() => {
        setIsLoading(true)
        let sortQuery = sortAndOrder.sortBy === "" ? "" : `?sort_by=${sortAndOrder.sortBy}`
        let orderQuery = sortAndOrder.orderBy === "" ? "" : `&order=${sortAndOrder.orderBy}`
        fetchData({endpoint: `/articles${sortQuery}${orderQuery}`, params: {topic: topic_slug}})
        .then(({articles}) => {
            setArticles(articles)
            setIsLoading(false)
            setIsError(false)
        })
        .catch((err) => {
            console.error(err);
            setIsLoading(false);
            setIsError(true);
        })
    },[topic_slug, sortAndOrder])

    const handleClick = () => {
        navigate("/articles")
    }

    if (isLoading) return <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> 
    if (isError) return <p>Something went wrong...</p>

    return (
        <div className="container">
            <h1>Articles about {topic_slug}</h1>
            <Button onClick={handleClick}>Back To All Articles</Button>
            <br />
            <OrderArticles  setSortAndOrder={setSortAndOrder}/>
            {articles.map((article) => {
                return (
                    <ArticleCard  key={article.article_id} article={article} />
                )
            })}
        </div>
        )
}

export default FilteredTopics