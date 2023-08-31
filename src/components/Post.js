
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getProfile from '../lib/ProfileService';
import './Post.css'

function Post({postId, ownerId, content, timestamp}) {
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const p = getProfile(ownerId)
        setProfile(p)
    }, [])

    const date = new Date(timestamp).toLocaleDateString()
    return (
        <div className="Post">
            <div className="Profile">
                {/* <div className='ProfileImage'>
                    <img src={profile.picture}/>
                </div> */}
                <span className='Owner'>{profile.name}</span>
                <span className='Time'>{date}</span>
            </div>
            <div className='Content'>
                {content}
            </div>
            <div className='Action'>
                <span className='icon heart'><FontAwesomeIcon icon={faHeart} /></span>
                <span className='icon' onClick={e => navigate(`/post/${postId}`)}><FontAwesomeIcon icon={faComment} /></span>
            </div>
        </div>
    );
}
  
export default Post;
  