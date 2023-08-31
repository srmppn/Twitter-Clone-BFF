import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Comment from '../components/Comment';
import Post from '../components/Post';
import { getComments, getPost } from '../lib/TimelineService';
import './PostDetail.css';

function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getPost(postId)
          .then(data => setPost(data))

        getComments(postId)
            .then(data => setComments(data))
        
      }, [])

    if (post === null) {
        return (
            <div className='PostDetail'>
                Loading...
            </div>
        )
    }

    return (
        <div className="PostDetail">
            <Post postId={post.postId} ownerId={post.senderId} content={post.content} timestamp={post.timestamp}/>
            <div className='CommentSegtion'>
                {
                    comments ?
                        comments.map(comment => <Comment content={comment.content}/>) : null
                }
            </div>
            <div className='Write' onClick={e => navigate(`/post/${post.postId}/newcomment`)}>
                <FontAwesomeIcon icon={faPen} />
            </div>
        </div>
    )
}

export default PostDetail;