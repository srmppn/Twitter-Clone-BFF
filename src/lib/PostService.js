import axios from 'axios';


export function postMessage(message, callback) {
    return axios.post("http://localhost:8080/post", { senderId: '4059d44a-38d8-11ee-be56-0242ac120002', content: message })
                .then(callback)
                .catch(e => console.log(e))
}

export function createComment(postId, message, callback) {
    return axios.post("http://localhost:8080/comment", { postId: postId, senderId: '4059d44a-38d8-11ee-be56-0242ac120002', content: message })
                .then(callback)
                .catch(e => console.log(e))
}

export default { postMessage, createComment};