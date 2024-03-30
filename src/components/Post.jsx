import { useState } from 'react'
import fetcher from "../helpers/fetcher"
import { Link } from 'react-router-dom'


export default function Post(props) {

console.log(props)
    const [likes, setLikes] = useState(props.post.likes)
  
    //request in post 
    const likePost = async () => {
        event.preventDefault()
    
       let  data = {postID:props.post._id}

        fetcher("http://localhost:3000/postFeed/likePost", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                data
            )
        }).then(function (response) {
            console.log(data)
            return response.json();
        }).then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint
         console.log("i ran")
            console.log(data.likes)
            setLikes(data.likes+1)
        });
    }

    return (
        <>

        
            <h2>{props.post.title}</h2>
            <p>{props.post.content}</p>
            <Link to={`/profilePage/${props.post.username}`}> <h4>user {props.post.username}</h4></Link>
            <h4>likes:{likes}</h4>
            <button onClick={likePost} >Like post</button>
            {/* <h4>number of comments {props.post.comments.length}</h4> */}
            <h4>created at +{props.post.createdAt}</h4>

        </>
    )


}

