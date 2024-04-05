
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
         <Link to="/userList"  class="text-right m-5"><i class="fa-solid fa-user"> USERS</i></Link>

        <div class="text-center">
        <h1 class="text-center text-4xl font-bold m-4 ">Feed</h1>      
         <li><Link to={`/userList`}>Show users</Link></li>
        <Link to="../components/PostCreate"> <button onClick={handleNew} class="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4  m-auto rounded focus:outline-none focus:shadow-outline w-36">Create Post</button></Link>
        </div>
            
            { //POSTS NEED TO BE DISPLAYED . THEY ARE IN A ARRAY
                posts.map((object, i) => <Link to={`/PostPage/${object._id}`}><Post post={object} key={i} /></Link>)
            }
            <button onClick={refreshFeed} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  m-auto rounded focus:outline-none focus:shadow-outline w-36">Show more</button>
        </>
    )


}

export default Feed;