
import { Link, useNavigate } from 'react-router-dom'
import Post from '../components/Post'
import PostCreate from '../components/PostCreate'
import { useState, useEffect } from 'react'
import fetcher from '../helpers/fetcher'
const Feed = () => {
    const [posts, setPosts] = useState([])
    const [lastPost, setLastPost] = useState("")

    const navigate = useNavigate()

    function handleNew() {
        navigate("./")
    }


    //return the needed posts for the feed 
    const getFeed = async () => {
        const userPosts = await Promise.all([
            await fetcher('http://localhost:3000/requests/feed', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.

                setPosts(data)
             

                let lastPostDate = data[data.length - 1].createdAt
               
                setLastPost(lastPostDate)
            }),

        ])
    }

    //take in the last posts created at date.
    //store it in a state?
    const refreshFeed = async () => {
        let postJSON = { lastPost: lastPost }
        const userPosts = await Promise.all([
              await fetcher('http://localhost:3000/requests/refreshFeed', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json',"lastpost":lastPost },
               
            }).then(function (response) {
                return response.json(); 
            }).then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.

                setPosts(data)

            }),

        ])
    }



    useEffect(() => {
        getFeed();
    }, []);


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
            <h1>Posts</h1>
            { //POSTS NEED TO BE DISPLAYED . THEY ARE IN A ARRAY
         
                posts.map((object, i) => <Link to={`/PostPage/${object._id}`}><Post post={object} key={i} /></Link>)
            }
            <button onClick={refreshFeed}>Show more</button>
        </>
    )


}

export default Feed;