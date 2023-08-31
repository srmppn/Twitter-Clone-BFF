import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import { useEffect, useState } from 'react';
import { getTimeline } from './lib/TimelineService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const offset = 0;
const size = 10;

function App() {
  const [posts, setPosts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getTimeline(offset, size)
      .then(data => setPosts(data))
  }, [])

  return (
    <div className="App">
      { posts.map(p => <Post key={p.postId} postId={p.postId} ownerId={p.senderId} content={p.content} timestamp={p.timestamp} />) }
      <div className='Write' onClick={e => navigate('/newpost')}>
        <FontAwesomeIcon icon={faPen} />
      </div>
    </div>
  );
}

export default App;
