import axios from 'axios';


export function getTimeline(offset, size) {
    return axios.get("http://localhost:8080/timeline", { params: { offset, size } })
                .then(r => r.data)
                .catch(e => console.log(e))
}

export function getPost(postId) {
    return axios.get(`http://localhost:8080/timeline/${postId}`)
                .then(r => r.data)
                .catch(e => console.log(e))
}

export function getComments(postId) {
    return axios.get(`http://localhost:8080/timeline/${postId}/comments`)
                .then(r => r.data)
                .catch(e => console.log(e))
}

export default { getTimeline, getPost };