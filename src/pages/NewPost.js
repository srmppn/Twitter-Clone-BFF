import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postMessage } from '../lib/PostService';
import './NewPost.css'

function NewPost() {
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  return (
    <div className="NewPost">
        <textarea className="input-box" placeholder="ลองเขียนอะไรซักอย่่างดูสิ..." value={message} onChange={e => setMessage(e.target.value)}>
        </textarea>
        <div className='Send' onClick={e => postMessage(message, data => navigate('/'))}>
            <FontAwesomeIcon icon={faPaperPlane} />
        </div>
    </div>
  );
}

export default NewPost;