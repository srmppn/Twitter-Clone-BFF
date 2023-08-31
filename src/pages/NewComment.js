import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createComment } from '../lib/PostService';
import './NewPost.css'

function NewComment() {
  const [message, setMessage] = useState("")
  const { postId } = useParams();
  const navigate = useNavigate()

  return (
    <div className="NewPost">
        <textarea className="input-box" placeholder="ลองเขียนอะไรซักอย่่างดูสิ..." value={message} onChange={e => setMessage(e.target.value)}>
        </textarea>
        <div className='Send' onClick={e => createComment(postId, message, data => navigate(`/post/${postId}`))}>
            <FontAwesomeIcon icon={faPaperPlane} />
        </div>
    </div>
  );
}

export default NewComment;