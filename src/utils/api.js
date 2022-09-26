import axios from "axios"

export default function fetchData({endpoint = "/", params = {}, method = "get", data= {}}){
    
    return axios({
        method: method,
        baseURL: 'https://northcoders-0113-news.herokuapp.com/api',
        url: endpoint,
        params: params,
        data: data,
    })
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        console.error(err);
    })

}