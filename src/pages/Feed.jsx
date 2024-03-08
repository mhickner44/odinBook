
import { Link, useNavigate } from 'react-router-dom'
import Post from '../components/Post'
import PostCreate from '../components/PostCreate'

const Feed = () => {
    const navigate = useNavigate()

    function handleNew() {
        navigate("./")
    }


    //return the needed posts for the feed 
    const getFeed = async () => {
        const [userProfile, userPosts] = await Promise.all([
            await fetcher('http://localhost:3000/postFeed/feed', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.
               
                setInfo(data)

            }),

        ])
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