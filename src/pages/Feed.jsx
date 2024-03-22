
import { Link, useNavigate } from 'react-router-dom'
import Post from '../components/Post'
import PostCreate from '../components/PostCreate'
import { useState,useEffect } from 'react'
import fetcher from '../helpers/fetcher'
const Feed = () => {
    const [posts,setPosts]=useState([])
    
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

            }),

        ])
    }

//take in the last posts created at date.
//store it in a state?
    const refreshFeed = async () => {
        const userPosts = await Promise.all([
            await fetcher('http://localhost:3000/requests/feed', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
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
                    posts.map((object, i) => <Post post={object} key={i} />)
                }
<button onClick={refreshFeed}>Show more</button>
        </>
    )


}

export default Feed;