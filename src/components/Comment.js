import './Comment.css'


function Comment({content}) {
    return (
        <div className="Comment">
            <div className="Profile">
                <span className='Owner'>นกฮูกราตรี</span>
                <span className='Time'>17/08/2023</span>
            </div>
            <span className='Message'>{content}</span>
        </div>
    )
}

export default Comment;