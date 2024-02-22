
import { Link, useNavigate } from 'react-router-dom'
import Post from '../components/Post'
import PostCreate from '../components/PostCreate'

const Feed = () => {
    const navigate = useNavigate()

    function handleNew() {
        navigate("./")
    }
    return (

        <>
            <h1>Feed</h1>
            {/* new post header */}
            <div className='newPost'>
                <input placeholder='Post title' />
                <Link to="../components/PostCreate"> <button onClick={handleNew} >New</button></Link>
            </div>
            {/* //posts 
can loop through this displaying as many as I want */}
            <Post />

        </>
    )


}

export default Feed;